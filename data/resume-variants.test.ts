import { describe, expect, it } from "vitest"

import { getResumeData } from "@/data/resume-variants"

describe("resume data", () => {
  it("keeps the unified experience ordering", () => {
    const data = getResumeData("ko")

    expect(data.keyExperience.map(item => item.name)).toEqual([
      "AI Agent Platform 설계와 서비스 적용",
      "Ohouse AI 글로벌 출시와 수익화",
      "3D 서비스 성능 개선 및 에셋 파이프라인 자동화",
    ])
  })

  it("includes backend results and the platform expansion", () => {
    const serialized = JSON.stringify(getResumeData("ko"))

    expect(serialized).toContain("구매 전환율 10.5%")
    expect(serialized).toContain("공통 실행 구조")
    expect(serialized).toContain("오늘의집 자연어 검색 서비스")
    expect(serialized).not.toMatch(/\b(?:TODO|TBD|FIXME)\b/i)
  })

  it("keeps the English resume available", () => {
    expect(getResumeData("en").personalInfo.name).toBe("Juahn Jeong")
  })
})
