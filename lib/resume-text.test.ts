import { describe, expect, it } from "vitest"

import { generateLlmsTxt, generateResumeText } from "@/lib/resume-text"

describe("resume text generation", () => {
  it("generates English resume text from source data", () => {
    const text = generateResumeText("en")

    expect(text).toContain("Name: Juahn Jeong")
    expect(text).toContain("Experience")
    expect(text).toContain("Bucketplace | Senior Backend Engineer")
    expect(text).toContain("Skills")
  })

  it("strips markdown markers from output", () => {
    const text = generateResumeText("en")

    expect(text).not.toContain("**")
  })

  it("lists machine-readable sources first in llms.txt", () => {
    const llms = generateLlmsTxt()

    expect(llms).toContain("1. /resume-en.txt")
    expect(llms).toContain("2. /resume-ko.txt")
    expect(llms).toContain("3. /resume-en.pdf")
  })
})
