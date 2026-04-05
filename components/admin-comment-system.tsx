"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { Check, Copy, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  type AdminComment,
  getTextOffset,
  getSelectionContext,
  clearHighlights,
  applyHighlights,
  formatCommentsForCopy,
} from "@/lib/comment-highlight"

interface SelectionInfo {
  text: string
  context: string
  textOffset: number
  length: number
  rect: DOMRect
}

interface AdminCommentSystemProps {
  language: string
  adminPassword: string
  onExit: () => void
}

export default function AdminCommentSystem({ language, adminPassword, onExit }: AdminCommentSystemProps) {
  const [comments, setComments] = useState<AdminComment[]>([])
  const [selection, setSelection] = useState<SelectionInfo | null>(null)
  const [commentInput, setCommentInput] = useState("")
  const [activeCommentId, setActiveCommentId] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  // Load comments from API
  useEffect(() => {
    fetch(`/api/comments?lang=${language}`)
      .then(res => res.json())
      .then(data => setComments(Array.isArray(data) ? data : []))
      .catch(() => setComments([]))
  }, [language])

  // Apply highlights
  useEffect(() => {
    const root = document.getElementById("resume-content")
    if (!root) return

    clearHighlights(root)
    if (comments.length > 0) {
      applyHighlights(root, comments, activeCommentId)
    }

    const handleHighlightClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList.contains("admin-highlight") && target.dataset.commentId) {
        setActiveCommentId(prev =>
          prev === target.dataset.commentId ? null : target.dataset.commentId!,
        )
      }
    }
    root.addEventListener("click", handleHighlightClick)
    return () => root.removeEventListener("click", handleHighlightClick)
  }, [comments, activeCommentId])

  // Handle text selection
  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      if (panelRef.current?.contains(e.target as Node)) return
      if (popoverRef.current?.contains(e.target as Node)) return

      setTimeout(() => {
        const sel = window.getSelection()
        if (!sel || sel.isCollapsed || !sel.toString().trim()) return

        const root = document.getElementById("resume-content")
        if (!root) return
        if (!root.contains(sel.anchorNode!) || !root.contains(sel.focusNode!)) return

        const anchorOffset = getTextOffset(root, sel.anchorNode!, sel.anchorOffset)
        const focusOffset = getTextOffset(root, sel.focusNode!, sel.focusOffset)
        if (anchorOffset === -1 || focusOffset === -1) return

        const start = Math.min(anchorOffset, focusOffset)
        const end = Math.max(anchorOffset, focusOffset)
        const selectedText = sel.toString().trim()

        if (selectedText) {
          const range = sel.getRangeAt(0)
          const rect = range.getBoundingClientRect()
          const context = getSelectionContext(sel.anchorNode!, root)
          setSelection({ text: selectedText, context, textOffset: start, length: end - start, rect })
          setCommentInput("")
          setTimeout(() => inputRef.current?.focus(), 50)
        }
      }, 10)
    }

    document.addEventListener("mouseup", handleMouseUp)
    return () => document.removeEventListener("mouseup", handleMouseUp)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const root = document.getElementById("resume-content")
      if (root) clearHighlights(root)
    }
  }, [])

  // Dismiss popover on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!selection) return
      if (popoverRef.current?.contains(e.target as Node)) return
      // Small delay to not conflict with mouseup selection handler
      setTimeout(() => {
        const sel = window.getSelection()
        if (!sel || sel.isCollapsed) {
          setSelection(null)
        }
      }, 20)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [selection])

  const handleAddComment = useCallback(() => {
    if (!selection || !commentInput.trim()) return

    const newComment: AdminComment = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      selectedText: selection.text,
      textOffset: selection.textOffset,
      length: selection.length,
      comment: commentInput.trim(),
      context: selection.context,
      createdAt: new Date().toISOString(),
    }

    setComments(prev => [...prev, newComment])
    setSelection(null)
    setCommentInput("")
    setActiveCommentId(newComment.id)
    window.getSelection()?.removeAllRanges()

    fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-password": adminPassword },
      body: JSON.stringify({ lang: language, comment: newComment }),
    }).catch(console.error)
  }, [selection, commentInput, language, adminPassword])

  const handleDeleteComment = useCallback((id: string) => {
    setComments(prev => prev.filter(c => c.id !== id))
    if (activeCommentId === id) setActiveCommentId(null)

    fetch("/api/comments", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-password": adminPassword },
      body: JSON.stringify({ lang: language, commentId: id }),
    }).catch(console.error)
  }, [activeCommentId, language, adminPassword])

  const handleCopyAll = useCallback(() => {
    if (comments.length === 0) return

    const root = document.getElementById("resume-content")
    const text = formatCommentsForCopy(comments, root)
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [comments])

  const scrollToHighlight = useCallback((commentId: string) => {
    const mark = document.querySelector(`mark.admin-highlight[data-comment-id="${commentId}"]`)
    if (mark) {
      mark.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [])

  const sortedComments = [...comments].sort((a, b) => a.textOffset - b.textOffset)

  return (
    <>
      {/* Review mode banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-1.5 text-sm font-medium z-50 print:hidden">
        리뷰 모드 — 텍스트를 드래그하여 댓글을 추가하세요
        <button
          onClick={onExit}
          className="ml-4 px-3 py-0.5 bg-amber-700 rounded text-xs hover:bg-amber-800 transition-colors"
        >
          리뷰 종료
        </button>
      </div>

      {/* Comment input popover */}
      {selection && (
        <div
          ref={popoverRef}
          className="fixed z-[60] bg-white border border-gray-300 rounded-lg shadow-xl p-3 w-72 print:hidden"
          style={{
            top: Math.min(selection.rect.bottom + 8, window.innerHeight - 220),
            left: Math.min(Math.max(selection.rect.left, 8), window.innerWidth - 300),
          }}
        >
          <div className="text-xs text-gray-500 mb-2 line-clamp-2 italic">
            &ldquo;{selection.text}&rdquo;
          </div>
          <textarea
            ref={inputRef}
            value={commentInput}
            onChange={e => setCommentInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleAddComment()
              }
              if (e.key === "Escape") setSelection(null)
            }}
            placeholder="댓글을 입력하세요..."
            className="w-full border border-gray-200 rounded p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows={2}
          />
          <div className="flex justify-end gap-1 mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelection(null)}
              className="h-7 px-2 text-xs"
            >
              취소
            </Button>
            <Button
              size="sm"
              onClick={handleAddComment}
              disabled={!commentInput.trim()}
              className="h-7 px-3 text-xs bg-amber-500 hover:bg-amber-600 text-white"
            >
              추가
            </Button>
          </div>
        </div>
      )}

      {/* Comments panel */}
      <div
        ref={panelRef}
        className="fixed right-0 top-9 bottom-0 w-80 bg-gray-50 border-l border-gray-200 overflow-y-auto z-40 print:hidden shadow-lg"
      >
        <div className="p-3 border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-gray-700">
              댓글 ({comments.length})
            </h3>
            {comments.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyAll}
                className="h-7 px-2 text-xs"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 mr-1" /> 복사됨
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 mr-1" /> 전체 복사
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {comments.length === 0 ? (
          <div className="p-6 text-center text-gray-400 text-sm">
            텍스트를 드래그하고
            <br />
            댓글을 추가하세요
          </div>
        ) : (
          <div className="p-2 space-y-2">
            {sortedComments.map((comment, index) => (
              <div
                key={comment.id}
                className={`bg-white rounded-lg border p-3 cursor-pointer transition-colors ${
                  activeCommentId === comment.id
                    ? "border-amber-400 ring-2 ring-amber-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => {
                  const newId = activeCommentId === comment.id ? null : comment.id
                  setActiveCommentId(newId)
                  if (newId) scrollToHighlight(newId)
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <button
                    onClick={e => {
                      e.stopPropagation()
                      handleDeleteComment(comment.id)
                    }}
                    className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="mt-1.5 text-xs text-gray-500 bg-gray-50 rounded px-2 py-1 line-clamp-2 italic">
                  &ldquo;{comment.selectedText}&rdquo;
                </div>
                <div className="mt-1.5 text-sm text-gray-700 whitespace-pre-wrap">
                  {comment.comment}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
