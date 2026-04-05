import { describe, it, expect, beforeEach, vi, type Mock } from "vitest"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import AdminCommentSystem from "./admin-comment-system"

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}))

function setupResumeContent(text = "Hello World Foo Bar") {
  const div = document.createElement("div")
  div.id = "resume-content"
  div.textContent = text
  document.body.appendChild(div)
  return div
}

function mockFetchWith(comments: unknown[] = []) {
  const fetchMock = vi.fn<(...args: unknown[]) => Promise<Response>>((url) => {
    if (typeof url === "string" && url.startsWith("/api/comments")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(comments),
      } as Response)
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ ok: true }),
    } as Response)
  })
  global.fetch = fetchMock
  return fetchMock
}

describe("AdminCommentSystem", () => {
  beforeEach(() => {
    document.body.innerHTML = ""
    vi.restoreAllMocks()
  })

  it("renders review mode banner", () => {
    setupResumeContent()
    mockFetchWith([])
    render(<AdminCommentSystem language="ko" adminPassword="1234" onExit={vi.fn()} />)
    expect(screen.getAllByText(/리뷰 모드/).length).toBeGreaterThan(0)
  })

  it("renders empty state message when no comments", () => {
    setupResumeContent()
    mockFetchWith([])
    render(<AdminCommentSystem language="ko" adminPassword="1234" onExit={vi.fn()} />)
    expect(screen.getByText(/텍스트를 드래그하고/)).toBeInTheDocument()
  })

  it("shows comment count as 0 initially", () => {
    setupResumeContent()
    mockFetchWith([])
    render(<AdminCommentSystem language="ko" adminPassword="1234" onExit={vi.fn()} />)
    expect(screen.getByText("댓글 (0)")).toBeInTheDocument()
  })

  it("calls onExit when 리뷰 종료 is clicked", () => {
    setupResumeContent()
    mockFetchWith([])
    const onExit = vi.fn()
    render(<AdminCommentSystem language="ko" onExit={onExit} />)
    fireEvent.click(screen.getByText("리뷰 종료"))
    expect(onExit).toHaveBeenCalledOnce()
  })

  it("loads comments from API on mount", async () => {
    setupResumeContent()
    const storedComments = [
      {
        id: "test1",
        selectedText: "Hello",
        textOffset: 0,
        length: 5,
        comment: "Test comment",
        context: "",
        createdAt: "2026-01-01T00:00:00.000Z",
      },
    ]
    mockFetchWith(storedComments)

    render(<AdminCommentSystem language="ko" adminPassword="1234" onExit={vi.fn()} />)

    await waitFor(() => {
      expect(screen.getByText("댓글 (1)")).toBeInTheDocument()
    })
    expect(screen.getByText("Test comment")).toBeInTheDocument()
  })

  it("fetches with correct language parameter", () => {
    setupResumeContent()
    const fetchMock = mockFetchWith([])

    render(<AdminCommentSystem language="en" adminPassword="1234" onExit={vi.fn()} />)

    expect(fetchMock).toHaveBeenCalledWith("/api/comments?lang=en")
  })

  it("deletes a comment when trash icon is clicked", async () => {
    setupResumeContent()
    const storedComments = [
      {
        id: "del1",
        selectedText: "Hello",
        textOffset: 0,
        length: 5,
        comment: "Delete me",
        context: "",
        createdAt: "2026-01-01T00:00:00.000Z",
      },
    ]
    const fetchMock = mockFetchWith(storedComments)

    render(<AdminCommentSystem language="ko" adminPassword="1234" onExit={vi.fn()} />)

    await waitFor(() => {
      expect(screen.getByText("Delete me")).toBeInTheDocument()
    })

    const deleteBtn = screen
      .getByText("Delete me")
      .closest("[class*='bg-white rounded-lg']")!
      .querySelector("button")!
    fireEvent.click(deleteBtn)

    expect(screen.queryByText("Delete me")).not.toBeInTheDocument()
    expect(screen.getByText("댓글 (0)")).toBeInTheDocument()

    // Should call DELETE API with auth header
    expect(fetchMock).toHaveBeenCalledWith("/api/comments", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-password": "1234" },
      body: JSON.stringify({ lang: "ko", commentId: "del1" }),
    })
  })

  it("displays comments sorted by textOffset", async () => {
    setupResumeContent("AABBCCDD")
    const storedComments = [
      {
        id: "s2",
        selectedText: "CC",
        textOffset: 4,
        length: 2,
        comment: "Second in position",
        context: "",
        createdAt: "2026-01-01T00:00:00.000Z",
      },
      {
        id: "s1",
        selectedText: "AA",
        textOffset: 0,
        length: 2,
        comment: "First in position",
        context: "",
        createdAt: "2026-01-01T00:00:00.000Z",
      },
    ]
    mockFetchWith(storedComments)

    render(<AdminCommentSystem language="ko" adminPassword="1234" onExit={vi.fn()} />)

    await waitFor(() => {
      expect(screen.getAllByText(/in position/).length).toBe(2)
    })

    const commentTexts = screen.getAllByText(/in position/)
    expect(commentTexts[0].textContent).toBe("First in position")
    expect(commentTexts[1].textContent).toBe("Second in position")
  })

  it("cleans up highlights on unmount", async () => {
    const content = setupResumeContent("Hello World")
    const storedComments = [
      {
        id: "cleanup1",
        selectedText: "Hello",
        textOffset: 0,
        length: 5,
        comment: "Will be cleaned",
        context: "",
        createdAt: "2026-01-01T00:00:00.000Z",
      },
    ]
    mockFetchWith(storedComments)

    const { unmount } = render(
      <AdminCommentSystem language="ko" adminPassword="1234" onExit={vi.fn()} />,
    )

    await waitFor(() => {
      expect(
        content.querySelectorAll("mark.admin-highlight").length,
      ).toBeGreaterThan(0)
    })

    unmount()

    expect(content.querySelectorAll("mark.admin-highlight").length).toBe(0)
    expect(content.textContent).toBe("Hello World")
  })

  it("shows 전체 복사 button only when comments exist", async () => {
    setupResumeContent()
    mockFetchWith([])
    render(<AdminCommentSystem language="ko" adminPassword="1234" onExit={vi.fn()} />)

    expect(screen.queryByText(/전체 복사/)).not.toBeInTheDocument()
  })
})
