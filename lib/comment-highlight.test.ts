import { describe, it, expect, beforeEach } from "vitest"
import {
  getTextOffset,
  getPositionAtOffset,
  getElementTextRange,
  findCommentableElement,
  getSelectionContext,
  getSurroundingContext,
  clearHighlights,
  applyHighlights,
  wrapTextRange,
  formatCommentsForCopy,
  type AdminComment,
} from "./comment-highlight"

function makeRoot(html: string): HTMLDivElement {
  const div = document.createElement("div")
  div.innerHTML = html
  return div
}

function makeComment(overrides: Partial<AdminComment> = {}): AdminComment {
  return {
    id: "c1",
    selectedText: "test",
    textOffset: 0,
    length: 4,
    comment: "a comment",
    context: "",
    createdAt: "2026-01-01T00:00:00.000Z",
    ...overrides,
  }
}

// ──────────────────────────────────────────────
// getTextOffset
// ──────────────────────────────────────────────
describe("getTextOffset", () => {
  it("returns offset for single text node", () => {
    const root = makeRoot("Hello World")
    const textNode = root.firstChild!
    expect(getTextOffset(root, textNode, 0)).toBe(0)
    expect(getTextOffset(root, textNode, 5)).toBe(5)
    expect(getTextOffset(root, textNode, 11)).toBe(11)
  })

  it("returns accumulated offset across sibling elements", () => {
    const root = makeRoot("<span>Hello</span><span> World</span>")
    const secondText = root.querySelector("span:nth-child(2)")!.firstChild!
    // "Hello" = 5 chars, then " World" starts at 5
    expect(getTextOffset(root, secondText, 0)).toBe(5)
    expect(getTextOffset(root, secondText, 1)).toBe(6)
  })

  it("returns accumulated offset in nested elements", () => {
    const root = makeRoot("<p>AB<strong>CD</strong>EF</p>")
    const strongText = root.querySelector("strong")!.firstChild!
    // "AB" = 2 chars
    expect(getTextOffset(root, strongText, 0)).toBe(2)
    expect(getTextOffset(root, strongText, 1)).toBe(3)

    const lastText = root.querySelector("p")!.lastChild!
    // "AB" + "CD" = 4 chars
    expect(getTextOffset(root, lastText, 0)).toBe(4)
  })

  it("returns -1 when node is not a descendant of root", () => {
    const root = makeRoot("Hello")
    const outside = document.createTextNode("outside")
    expect(getTextOffset(root, outside, 0)).toBe(-1)
  })
})

// ──────────────────────────────────────────────
// getPositionAtOffset
// ──────────────────────────────────────────────
describe("getPositionAtOffset", () => {
  it("returns correct node and offset for single text node", () => {
    const root = makeRoot("Hello World")
    const pos = getPositionAtOffset(root, 5)!
    expect(pos).not.toBeNull()
    expect(pos.node).toBe(root.firstChild)
    expect(pos.offset).toBe(5)
  })

  it("returns correct node across elements", () => {
    const root = makeRoot("<span>Hello</span><span> World</span>")
    const pos = getPositionAtOffset(root, 6)! // "H" in " World"
    expect(pos).not.toBeNull()
    expect(pos.node).toBe(root.querySelector("span:nth-child(2)")!.firstChild)
    expect(pos.offset).toBe(1)
  })

  it("returns null when offset is beyond total text length", () => {
    const root = makeRoot("Hello")
    expect(getPositionAtOffset(root, 100)).toBeNull()
  })

  it("returns null for empty root", () => {
    const root = makeRoot("")
    expect(getPositionAtOffset(root, 0)).toBeNull()
  })

  it("handles offset at exact boundary between nodes", () => {
    const root = makeRoot("<span>AB</span><span>CD</span>")
    // offset 2 = end of first node (len=2, total+len >= targetOffset)
    const pos = getPositionAtOffset(root, 2)!
    expect(pos.node).toBe(root.querySelector("span:nth-child(1)")!.firstChild)
    expect(pos.offset).toBe(2)
  })
})

// ──────────────────────────────────────────────
// getTextOffset ↔ getPositionAtOffset roundtrip
// ──────────────────────────────────────────────
describe("getTextOffset ↔ getPositionAtOffset roundtrip", () => {
  it("roundtrips on a simple structure", () => {
    const root = makeRoot("<p>Hello <strong>World</strong> Foo</p>")
    const strongText = root.querySelector("strong")!.firstChild!

    const offset = getTextOffset(root, strongText, 3) // "Wor|ld"
    expect(offset).toBe(9) // "Hello " (6) + "Wor" (3) = 9

    const pos = getPositionAtOffset(root, offset)!
    expect(pos.node).toBe(strongText)
    expect(pos.offset).toBe(3)
  })

  it("roundtrips at every character position", () => {
    const root = makeRoot("<p>AB<em>CD</em>EF</p>")
    const fullText = root.textContent! // "ABCDEF"

    for (let i = 0; i < fullText.length; i++) {
      const pos = getPositionAtOffset(root, i)!
      expect(pos).not.toBeNull()
      const back = getTextOffset(root, pos.node, pos.offset)
      expect(back).toBe(i)
    }
  })
})

// ──────────────────────────────────────────────
// wrapTextRange
// ──────────────────────────────────────────────
describe("wrapTextRange", () => {
  it("wraps a portion of text in a <mark> element", () => {
    const root = makeRoot("Hello World")
    const textNode = root.firstChild as Text
    wrapTextRange(textNode, 6, 11, "c1", false)

    const mark = root.querySelector("mark.admin-highlight")
    expect(mark).not.toBeNull()
    expect(mark!.textContent).toBe("World")
    expect(mark!.dataset.commentId).toBe("c1")
    expect(root.textContent).toBe("Hello World")
  })

  it("applies active style when isActive is true", () => {
    const root = makeRoot("Hello World")
    const textNode = root.firstChild as Text
    wrapTextRange(textNode, 0, 5, "c1", true)

    const mark = root.querySelector("mark")!
    // jsdom normalizes hex to rgb
    expect(mark.style.backgroundColor).toBe("rgb(251, 191, 36)")
  })

  it("applies inactive style when isActive is false", () => {
    const root = makeRoot("Hello World")
    const textNode = root.firstChild as Text
    wrapTextRange(textNode, 0, 5, "c1", false)

    const mark = root.querySelector("mark")!
    expect(mark.style.backgroundColor).toBe("rgb(254, 240, 138)")
  })
})

// ──────────────────────────────────────────────
// clearHighlights
// ──────────────────────────────────────────────
describe("clearHighlights", () => {
  it("removes <mark> elements and restores text", () => {
    const root = makeRoot('Hello <mark class="admin-highlight">World</mark> Foo')
    clearHighlights(root)

    expect(root.querySelectorAll("mark").length).toBe(0)
    expect(root.textContent).toBe("Hello World Foo")
  })

  it("merges adjacent text nodes after clearing", () => {
    const root = makeRoot('AB<mark class="admin-highlight">CD</mark>EF')
    clearHighlights(root)

    // After normalize(), there should be a single text node
    expect(root.childNodes.length).toBe(1)
    expect(root.firstChild!.nodeType).toBe(Node.TEXT_NODE)
    expect(root.textContent).toBe("ABCDEF")
  })

  it("handles nested marks", () => {
    const root = makeRoot('<mark class="admin-highlight">A<mark class="admin-highlight">B</mark>C</mark>')
    clearHighlights(root)

    expect(root.querySelectorAll("mark").length).toBe(0)
    expect(root.textContent).toBe("ABC")
  })

  it("does not remove non-admin marks", () => {
    const root = makeRoot('<mark class="other">Hello</mark><mark class="admin-highlight">World</mark>')
    clearHighlights(root)

    expect(root.querySelectorAll("mark").length).toBe(1)
    expect(root.querySelector("mark.other")!.textContent).toBe("Hello")
  })

  it("handles empty root gracefully", () => {
    const root = makeRoot("")
    clearHighlights(root) // should not throw
    expect(root.textContent).toBe("")
  })
})

// ──────────────────────────────────────────────
// applyHighlights
// ──────────────────────────────────────────────
describe("applyHighlights", () => {
  it("highlights a single-node comment", () => {
    const root = makeRoot("Hello World")
    const comment = makeComment({ textOffset: 6, length: 5, selectedText: "World" })

    applyHighlights(root, [comment], null)

    const marks = root.querySelectorAll("mark.admin-highlight")
    expect(marks.length).toBeGreaterThanOrEqual(1)
    const highlightedText = Array.from(marks).map(m => m.textContent).join("")
    expect(highlightedText).toBe("World")
    expect(root.textContent).toBe("Hello World")
  })

  it("highlights a cross-element comment", () => {
    const root = makeRoot("<span>Hello </span><span>World</span>")
    // Select "lo Wor" → offset 3, length 6
    const comment = makeComment({ textOffset: 3, length: 6, selectedText: "lo Wor" })

    applyHighlights(root, [comment], null)

    const marks = root.querySelectorAll("mark.admin-highlight")
    expect(marks.length).toBe(2) // one in each span
    const highlighted = Array.from(marks).map(m => m.textContent).join("")
    expect(highlighted).toBe("lo Wor")
    expect(root.textContent).toBe("Hello World")
  })

  it("applies multiple non-overlapping comments", () => {
    const root = makeRoot("AABBCCDD")
    const comments = [
      makeComment({ id: "c1", textOffset: 0, length: 2, selectedText: "AA" }),
      makeComment({ id: "c2", textOffset: 4, length: 2, selectedText: "CC" }),
    ]

    applyHighlights(root, comments, null)

    const marks = root.querySelectorAll("mark.admin-highlight")
    expect(marks.length).toBe(2)
    expect(marks[0].textContent).toBe("AA")
    expect(marks[1].textContent).toBe("CC")
    expect(root.textContent).toBe("AABBCCDD")
  })

  it("marks the active comment with active style", () => {
    const root = makeRoot("Hello World")
    const comments = [
      makeComment({ id: "c1", textOffset: 0, length: 5, selectedText: "Hello" }),
      makeComment({ id: "c2", textOffset: 6, length: 5, selectedText: "World" }),
    ]

    applyHighlights(root, comments, "c2")

    const marks = root.querySelectorAll("mark.admin-highlight")
    const c1Mark = Array.from(marks).find(m => m.dataset.commentId === "c1")!
    const c2Mark = Array.from(marks).find(m => m.dataset.commentId === "c2")!
    expect(c1Mark.style.backgroundColor).toBe("rgb(254, 240, 138)") // inactive
    expect(c2Mark.style.backgroundColor).toBe("rgb(251, 191, 36)") // active
  })

  it("skips comments with invalid offsets gracefully", () => {
    const root = makeRoot("Short")
    const comment = makeComment({ textOffset: 100, length: 5, selectedText: "nope" })

    applyHighlights(root, [comment], null) // should not throw
    expect(root.querySelectorAll("mark").length).toBe(0)
    expect(root.textContent).toBe("Short")
  })

  it("clear + re-apply cycle preserves text content", () => {
    const root = makeRoot("Hello World Foo Bar")
    const comments = [
      makeComment({ id: "c1", textOffset: 0, length: 5, selectedText: "Hello" }),
      makeComment({ id: "c2", textOffset: 6, length: 5, selectedText: "World" }),
    ]

    // Apply
    applyHighlights(root, comments, null)
    expect(root.textContent).toBe("Hello World Foo Bar")

    // Clear
    clearHighlights(root)
    expect(root.textContent).toBe("Hello World Foo Bar")
    expect(root.querySelectorAll("mark").length).toBe(0)

    // Re-apply with different active
    applyHighlights(root, comments, "c1")
    expect(root.textContent).toBe("Hello World Foo Bar")
    expect(root.querySelectorAll("mark").length).toBe(2)
  })
})

// ──────────────────────────────────────────────
// getElementTextRange
// ──────────────────────────────────────────────
describe("getElementTextRange", () => {
  it("returns offset and length for a simple paragraph", () => {
    const root = makeRoot("<p>Hello</p><p>World</p>")
    const secondP = root.querySelectorAll("p")[1]
    const range = getElementTextRange(root, secondP)!
    expect(range).not.toBeNull()
    expect(range.offset).toBe(5) // "Hello" = 5 chars
    expect(range.length).toBe(5) // "World" = 5 chars
  })

  it("returns offset for nested text content", () => {
    const root = makeRoot("<p>AB</p><p><strong>CD</strong>EF</p>")
    const secondP = root.querySelectorAll("p")[1]
    const range = getElementTextRange(root, secondP)!
    expect(range.offset).toBe(2) // "AB" = 2 chars
    expect(range.length).toBe(4) // "CDEF" = 4 chars
  })

  it("returns null for element not in root", () => {
    const root = makeRoot("<p>Hello</p>")
    const outside = document.createElement("p")
    outside.textContent = "Outside"
    expect(getElementTextRange(root, outside)).toBeNull()
  })

  it("handles first element correctly", () => {
    const root = makeRoot("<p>Hello</p><p>World</p>")
    const firstP = root.querySelectorAll("p")[0]
    const range = getElementTextRange(root, firstP)!
    expect(range.offset).toBe(0)
    expect(range.length).toBe(5)
  })
})

// ──────────────────────────────────────────────
// findCommentableElement
// ──────────────────────────────────────────────
describe("findCommentableElement", () => {
  it("finds closest <p> from a text node", () => {
    const root = makeRoot("<p>Hello World</p>")
    const textNode = root.querySelector("p")!.firstChild!
    const result = findCommentableElement(textNode, root)
    expect(result).toBe(root.querySelector("p"))
  })

  it("finds closest <li> from nested content", () => {
    const root = makeRoot("<ul><li><strong>Bold</strong> text</li></ul>")
    const strongText = root.querySelector("strong")!.firstChild!
    const result = findCommentableElement(strongText, root)
    expect(result).toBe(root.querySelector("li"))
  })

  it("finds <h3> when tapping a heading", () => {
    const root = makeRoot("<h3>Section Title</h3><p>Content</p>")
    const headingText = root.querySelector("h3")!.firstChild!
    const result = findCommentableElement(headingText, root)
    expect(result).toBe(root.querySelector("h3"))
  })

  it("returns null when no commentable parent exists", () => {
    const root = makeRoot("<div><div>Nested div</div></div>")
    const textNode = root.querySelector("div div")!.firstChild!
    const result = findCommentableElement(textNode, root)
    expect(result).toBeNull()
  })

  it("returns null for empty elements", () => {
    const root = makeRoot("<p></p>")
    const p = root.querySelector("p")!
    const result = findCommentableElement(p, root)
    expect(result).toBeNull()
  })
})

// ──────────────────────────────────────────────
// getSelectionContext
// ──────────────────────────────────────────────
describe("getSelectionContext", () => {
  it("finds h2 heading as context", () => {
    const root = makeRoot("<h2>Experience</h2><p>Some text here</p>")
    const textNode = root.querySelector("p")!.firstChild!
    expect(getSelectionContext(textNode, root)).toBe("Experience")
  })

  it("finds h2 > h3 breadcrumb", () => {
    const root = makeRoot("<h2>Experience</h2><div><h3>Bucketplace</h3><p>Details</p></div>")
    const textNode = root.querySelector("p")!.firstChild!
    expect(getSelectionContext(textNode, root)).toBe("Experience > Bucketplace")
  })

  it("returns empty string when no headings found", () => {
    const root = makeRoot("<p>Just text</p>")
    const textNode = root.querySelector("p")!.firstChild!
    expect(getSelectionContext(textNode, root)).toBe("")
  })

  it("finds nearest h3 within same parent", () => {
    const root = makeRoot("<div><h3>Project A</h3><p>Description</p></div>")
    const textNode = root.querySelector("p")!.firstChild!
    expect(getSelectionContext(textNode, root)).toBe("Project A")
  })

  it("finds h2 inside a sibling wrapper div (resume DOM structure)", () => {
    // Actual resume structure: <div class="mb-8"><h2>경력</h2>...</div>
    const root = makeRoot(`
      <div class="mb-8">
        <h2>경력</h2>
        <div>
          <div><h3>Bucketplace</h3></div>
          <ul><li>Some bullet text</li></ul>
        </div>
      </div>
    `)
    const textNode = root.querySelector("li")!.firstChild!
    expect(getSelectionContext(textNode, root)).toBe("경력 > Bucketplace")
  })

  it("finds h3 nested inside a sibling div", () => {
    const root = makeRoot(`
      <div>
        <div><div><h3>Company</h3><p>Position</p></div></div>
        <ul><li>Description</li></ul>
      </div>
    `)
    const textNode = root.querySelector("li")!.firstChild!
    expect(getSelectionContext(textNode, root)).toBe("Company")
  })

  it("stops collecting after finding h2", () => {
    const root = makeRoot(`
      <div class="section">
        <h2>Section A</h2>
        <div><h3>Sub A</h3><p>Text A</p></div>
      </div>
      <div class="section">
        <h2>Section B</h2>
        <p>Text B</p>
      </div>
    `)
    const textNode = root.querySelector("div.section:nth-child(2) p")!.firstChild!
    const context = getSelectionContext(textNode, root)
    // Should find Section B but not Section A
    expect(context).toBe("Section B")
  })
})

// ──────────────────────────────────────────────
// getSurroundingContext
// ──────────────────────────────────────────────
describe("getSurroundingContext", () => {
  it("shows surrounding text with bold selection", () => {
    const root = makeRoot("Hello World Foo Bar")
    const result = getSurroundingContext(root, 6, 5, 5)
    expect(result).toBe("...ello [[World]] Foo ...")
  })

  it("omits leading ellipsis when at start", () => {
    const root = makeRoot("Hello World")
    const result = getSurroundingContext(root, 0, 5, 10)
    expect(result).toBe("[[Hello]] World")
  })

  it("omits trailing ellipsis when at end", () => {
    const root = makeRoot("Hello World")
    const result = getSurroundingContext(root, 6, 5, 10)
    expect(result).toBe("Hello [[World]]")
  })

  it("handles full text shorter than context window", () => {
    const root = makeRoot("Hi")
    const result = getSurroundingContext(root, 0, 2, 50)
    expect(result).toBe("[[Hi]]")
  })
})

// ──────────────────────────────────────────────
// formatCommentsForCopy
// ──────────────────────────────────────────────
describe("formatCommentsForCopy", () => {
  it("formats without root (fallback to quoted selectedText)", () => {
    const comments = [makeComment({ selectedText: "Hello", comment: "Fix this" })]
    expect(formatCommentsForCopy(comments)).toBe('[1]\n  "Hello"\n  → Fix this')
  })

  it("includes context in header when available", () => {
    const comments = [makeComment({ selectedText: "Hello", comment: "Fix this", context: "경력 > 버킷플레이스" })]
    expect(formatCommentsForCopy(comments)).toBe('[1] 경력 > 버킷플레이스\n  "Hello"\n  → Fix this')
  })

  it("formats with root (shows surrounding context)", () => {
    const root = makeRoot("Hello World Foo Bar")
    const comments = [makeComment({ textOffset: 6, length: 5, selectedText: "World", comment: "Fix this" })]
    const result = formatCommentsForCopy(comments, root)
    expect(result).toContain("[[World]]")
    expect(result).toContain("→ Fix this")
  })

  it("sorts comments by textOffset and numbers sequentially", () => {
    const comments = [
      makeComment({ id: "c2", textOffset: 10, selectedText: "World", comment: "Second" }),
      makeComment({ id: "c1", textOffset: 0, selectedText: "Hello", comment: "First" }),
    ]
    const result = formatCommentsForCopy(comments)
    expect(result).toContain("[1]")
    expect(result).toContain("First")
    expect(result).toContain("[2]")
    expect(result).toContain("Second")
    expect(result.indexOf("First")).toBeLessThan(result.indexOf("Second"))
  })

  it("returns empty string for empty array", () => {
    expect(formatCommentsForCopy([])).toBe("")
  })
})

