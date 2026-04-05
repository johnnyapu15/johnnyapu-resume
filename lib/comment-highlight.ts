export interface AdminComment {
  id: string
  selectedText: string
  textOffset: number
  length: number
  comment: string
  createdAt: string
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

export function formatCommentsForCopy(comments: AdminComment[]): string {
  const sorted = [...comments].sort((a, b) => a.textOffset - b.textOffset)
  return sorted
    .map((c, i) => `[${i + 1}] "${c.selectedText}"\n→ ${c.comment}`)
    .join("\n\n")
}
