import { describe, expect, it } from "vitest"

import { getResumeData } from "@/data/resume-variants"

describe("resume data", () => {
  it("keeps the unified experience ordering", () => {
    const data = getResumeData("ko")

    expect(data.keyExperience.map(item => item.name)).toEqual([
      "AI Agent Orchestration과 Platform 확장",
      "Ohouse AI 런칭 및 고도화",
      "3D 서비스 성능 개선 및 에셋 파이프라인 자동화",
    ])
  })

  it("includes backend results and the platform expansion", () => {
    const serialized = JSON.stringify(getResumeData("ko"))

    expect(serialized).toContain("CVR 10.5%")
    expect(serialized).toContain("framework-agnostic execution runtime")
    expect(serialized).toContain("SDK-agnostic canonical Engine Event")
    expect(serialized).not.toMatch(/\b(?:TODO|TBD|FIXME)\b/i)
  })

  it("keeps the English resume available", () => {
    expect(getResumeData("en").personalInfo.name).toBe("Juahn Jeong")
  })
})
