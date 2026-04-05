import { generateResumeText } from "@/lib/resume-text"

export const dynamic = "force-static"

export function GET() {
  return new Response(generateResumeText("en"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
