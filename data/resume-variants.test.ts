import { describe, expect, it } from "vitest"

import {
  defaultResumeTrack,
  getResumeData,
  parseResumeTrack,
  resumeTracks,
} from "@/data/resume-variants"

describe("resume track resolver", () => {
  it("uses Platform as the default and fallback track", () => {
    expect(defaultResumeTrack).toBe("platform")
    expect(parseResumeTrack(null)).toBe("platform")
    expect(parseResumeTrack("unknown")).toBe("platform")
    expect(parseResumeTrack("ai-backend")).toBe("ai-backend")
  })

  it("keeps Platform-specific experience and ordering", () => {
    const data = getResumeData("ko", "platform")

    expect(data.keyExperience.map(item => item.name)).toEqual([
      "AI Agent Orchestration과 Platform 확장",
      "Ohouse AI 런칭 및 고도화",
      "3D 에셋 파이프라인 구축 및 생산 자동화",
    ])
  })

  it("keeps AI/Backend-specific experience and ordering", () => {
    const data = getResumeData("ko", "ai-backend")

    expect(data.keyExperience.map(item => item.name)).toEqual([
      "AI Agent Orchestration과 Platform 확장",
      "Ohouse AI 런칭 및 고도화",
      "3D방꾸미기 성능·안정성 강화",
    ])
  })

  it.each(resumeTracks)("does not expose draft markers in %s", track => {
    expect(JSON.stringify(getResumeData("ko", track))).not.toMatch(/\b(?:TODO|TBD|FIXME)\b/i)
  })

  it("keeps the English resume stable across Korean tracks", () => {
    expect(getResumeData("en", "platform")).toEqual(getResumeData("en", "ai-backend"))
  })
})
