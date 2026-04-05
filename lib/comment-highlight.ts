export interface AdminComment {
  id: string
  selectedText: string
  textOffset: number
  length: number
  comment: string
  context: string // e.g. "경력 > 버킷플레이스 > Ohouse AI Launch"
  createdAt: string
}

/**
 * Walk up from a DOM node to find section context (h2, h3 headings).
 * Returns a breadcrumb like "경력 > 버킷플레이스 > Ohouse AI Launch"
 */
export function getSelectionContext(node: Node, root: Element): string {
  const headings: string[] = []
  let current: Node | null = node

  while (current && current !== root) {
    if (current.nodeType === Node.ELEMENT_NODE) {
      const el = current as Element
      // Check previous siblings for headings
      let sibling = el.previousElementSibling
      while (sibling) {
        const tag = sibling.tagName
        if (tag === "H2" || tag === "H3") {
          const text = sibling.textContent?.trim()
          if (text && !headings.includes(text)) {
            headings.unshift(text)
          }
          if (tag === "H2") break // H2 is top-level section, stop looking further
        }
        sibling = sibling.previousElementSibling
      }
    }
    current = current.parentNode
  }

  return headings.join(" > ")
}

/**
 * Get surrounding text context around the selected text.
 * Returns "...before **selected** after..."
 */
export function getSurroundingContext(root: Element, textOffset: number, length: number, maxContext: number = 30): string {
  const fullText = root.textContent || ""
  const start = Math.max(0, textOffset - maxContext)
  const end = Math.min(fullText.length, textOffset + length + maxContext)

  const before = fullText.slice(start, textOffset)
  const selected = fullText.slice(textOffset, textOffset + length)
  const after = fullText.slice(textOffset + length, end)

  const prefix = start > 0 ? "..." : ""
  const suffix = end < fullText.length ? "..." : ""

  return `${prefix}${before}**${selected}**${after}${suffix}`
}

export function getTextOffset(root: Element, node: Node, offset: number): number {
  let total = 0
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let current = walker.nextNode()
  while (current) {
    if (current === node) return total + offset
    total += current.textContent?.length || 0
    current = walker.nextNode()
  }
  return -1
}

export function getPositionAtOffset(root: Element, targetOffset: number): { node: Node; offset: number } | null {
  let total = 0
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let current = walker.nextNode()
  while (current) {
    const len = current.textContent?.length || 0
    if (total + len >= targetOffset) {
      return { node: current, offset: targetOffset - total }
    }
    total += len
    current = walker.nextNode()
  }
  return null
}

/**
 * Get the textOffset range of an element's text content within the root.
 * Used for mobile tap-to-comment (select entire paragraph/bullet).
 */
export function getElementTextRange(root: Element, target: Element): { offset: number; length: number } | null {
  let total = 0
  let startOffset = -1
  let endOffset = -1
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let current = walker.nextNode()
  while (current) {
    const len = current.textContent?.length || 0
    if (target.contains(current)) {
      if (startOffset === -1) startOffset = total
      endOffset = total + len
    } else if (startOffset !== -1) {
      break
    }
    total += len
    current = walker.nextNode()
  }
  if (startOffset === -1) return null
  return { offset: startOffset, length: endOffset - startOffset }
}

/**
 * Find the closest commentable block element (p, li, h3, etc.) from a target node.
 */
export function findCommentableElement(node: Node, root: Element): Element | null {
  const commentableTags = new Set(["P", "LI", "H3", "SPAN"])
  let current: Node | null = node
  while (current && current !== root) {
    if (current.nodeType === Node.ELEMENT_NODE) {
      const el = current as Element
      if (commentableTags.has(el.tagName) && el.textContent?.trim()) {
        return el
      }
    }
    current = current.parentNode
  }
  return null
}

export function clearHighlights(root: Element) {
  const marks = root.querySelectorAll("mark.admin-highlight")
  marks.forEach(mark => {
    const parent = mark.parentNode!
    while (mark.firstChild) {
      parent.insertBefore(mark.firstChild, mark)
    }
    parent.removeChild(mark)
  })
  root.normalize()
}

export function wrapTextRange(node: Text, start: number, end: number, commentId: string, isActive: boolean) {
  const range = document.createRange()
  range.setStart(node, start)
  range.setEnd(node, end)
  const mark = document.createElement("mark")
  mark.className = "admin-highlight"
  mark.dataset.commentId = commentId
  mark.style.backgroundColor = isActive ? "#fbbf24" : "#fef08a"
  mark.style.borderBottom = "2px solid #f59e0b"
  mark.style.cursor = "pointer"
  mark.style.borderRadius = "2px"
  range.surroundContents(mark)
}

export function applyHighlights(root: Element, comments: AdminComment[], activeId: string | null) {
  const sorted = [...comments].sort((a, b) => b.textOffset - a.textOffset)

  for (const comment of sorted) {
    try {
      const start = getPositionAtOffset(root, comment.textOffset)
      const end = getPositionAtOffset(root, comment.textOffset + comment.length)
      if (!start || !end) continue

      const isActive = comment.id === activeId

      if (start.node === end.node) {
        wrapTextRange(start.node as Text, start.offset, end.offset, comment.id, isActive)
      } else {
        const textNodes: Array<{ node: Text; startOff: number; endOff: number }> = []
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
        let current = walker.nextNode() as Text | null
        let inRange = false

        while (current) {
          if (current === start.node) {
            inRange = true
            textNodes.push({ node: current, startOff: start.offset, endOff: current.length })
          } else if (current === end.node) {
            textNodes.push({ node: current, startOff: 0, endOff: end.offset })
            break
          } else if (inRange) {
            textNodes.push({ node: current, startOff: 0, endOff: current.length })
          }
          current = walker.nextNode() as Text | null
        }

        for (let i = textNodes.length - 1; i >= 0; i--) {
          const { node, startOff, endOff } = textNodes[i]
          if (startOff < endOff) {
            wrapTextRange(node, startOff, endOff, comment.id, isActive)
          }
        }
      }
    } catch (e) {
      console.warn("Failed to apply highlight:", comment.id, e)
    }
  }
}

export function formatCommentsForCopy(comments: AdminComment[], root?: Element | null): string {
  const sorted = [...comments].sort((a, b) => a.textOffset - b.textOffset)
  return sorted
    .map((c, i) => {
      const location = c.context ? `[${i + 1}] ${c.context}` : `[${i + 1}]`
      const context = root
        ? getSurroundingContext(root, c.textOffset, c.length)
        : `"${c.selectedText}"`
      return `${location}\n  ${context}\n  → ${c.comment}`
    })
    .join("\n\n")
}
