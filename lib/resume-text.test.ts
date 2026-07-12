import { describe, expect, it } from "vitest"

import { generateLlmsTxt, generateResumeText } from "@/lib/resume-text"

describe("resume text generation", () => {
  it("generates English resume text from source data", () => {
    const text = generateResumeText("en")

    expect(text).toContain("Name: Juahn Jeong")
    expect(text).toContain("Experience")
    expect(text).toContain("Bucketplace | Senior Backend Engineer")
    expect(text).toContain("Key Experience")
    expect(text).toContain("Education")
  })

  it("strips markdown markers from output", () => {
    const text = generateResumeText("en")

    expect(text).not.toContain("**")
  })

  it("generates complete Korean text for each track", () => {
    const platform = generateResumeText("ko", "platform")
    const aiBackend = generateResumeText("ko", "ai-backend")

    for (const text of [platform, aiBackend]) {
      expect(text).toContain("경력")
      expect(text).toContain("주요 경험")
      expect(text).toContain("학력")
    }
  })

  it("lists machine-readable sources first in llms.txt", () => {
    const llms = generateLlmsTxt()

    expect(llms).toContain("Quick index for partial readers:")
    expect(llms).toContain("[EN_RESUME_START]")
    expect(llms).toContain("[EN_RESUME_END]")
    expect(llms).toContain("[KO_RESUME_START]")
    expect(llms).toContain("[KO_RESUME_END]")
    expect(llms).not.toContain("AI_BACKEND")
    expect(llms).not.toContain("AI/Backend")
    expect(llms).toContain("- https://resume-juahn.vercel.app/resume-en.pdf (English)")
    expect(llms).toContain("- https://resume-juahn.vercel.app/resume.pdf (Korean)")
    expect(llms).not.toContain("resume-ai-backend.pdf")
    expect(llms).toContain("English Resume Text (Dynamic):")
    expect(llms).toContain("Korean Resume Text (Dynamic):")
  })
})
