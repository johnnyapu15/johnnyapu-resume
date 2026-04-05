import { kv } from "@vercel/kv"
import { NextRequest, NextResponse } from "next/server"

const KV_KEY_PREFIX = "resume-comments:"
const LOCK_TTL = 5 // seconds

function commentsKey(lang: string) {
  return `${KV_KEY_PREFIX}${lang}`
}

function lockKey(lang: string) {
  return `${KV_KEY_PREFIX}${lang}:lock`
}

function checkAuth(request: NextRequest): boolean {
  const adminPw = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "1234"
  const auth = request.headers.get("x-admin-password")
  return auth === adminPw
}

async function withLock<T>(lang: string, fn: () => Promise<T>): Promise<T> {
  const lock = lockKey(lang)
  const acquired = await kv.set(lock, "1", { nx: true, ex: LOCK_TTL })
  if (!acquired) {
    // Retry once after a short wait
    await new Promise(r => setTimeout(r, 200))
    const retry = await kv.set(lock, "1", { nx: true, ex: LOCK_TTL })
    if (!retry) {
      throw new Error("Could not acquire lock")
    }
  }
  try {
    return await fn()
  } finally {
    await kv.del(lock)
  }
}

// GET /api/comments?lang=ko
export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang") || "ko"
  const comments = await kv.get(commentsKey(lang))
  return NextResponse.json(comments ?? [])
}

// POST /api/comments  body: { lang, comment }
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  const { lang, comment } = await request.json()
  if (!lang || !comment) {
    return NextResponse.json({ error: "lang and comment required" }, { status: 400 })
  }

  await withLock(lang, async () => {
    const key = commentsKey(lang)
    const existing = (await kv.get<unknown[]>(key)) ?? []
    existing.push(comment)
    await kv.set(key, existing)
  })

  return NextResponse.json({ ok: true })
}

// DELETE /api/comments  body: { lang, commentId }
export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  const { lang, commentId } = await request.json()
  if (!lang || !commentId) {
    return NextResponse.json({ error: "lang and commentId required" }, { status: 400 })
  }

  await withLock(lang, async () => {
    const key = commentsKey(lang)
    const existing = (await kv.get<Array<{ id: string }>>(key)) ?? []
    const filtered = existing.filter(c => c.id !== commentId)
    await kv.set(key, filtered)
  })

  return NextResponse.json({ ok: true })
}
