import { describe, expect, it } from "vitest"

import { getResumeData } from "@/data/resume-variants"

describe("resume data", () => {
  it("keeps the unified experience ordering", () => {
    const data = getResumeData("ko")

    expect(data.keyExperience.map(item => item.name)).toEqual([
      "1. 사내 공통 AI Agent Platform 구축 및 타팀 서비스 도입",
      "2. AI 큐레이터 출시 전 성능 검증 및 운영 환경 정비",
      "3. 3D방꾸미기 성능 개선 및 에셋 제작 파이프라인 자동화",
    ])
  })

  it("includes backend results and the platform expansion", () => {
    const serialized = JSON.stringify(getResumeData("ko"))

    expect(serialized).toContain("구매 전환율 10.5%")
    expect(serialized).toContain("공통 실행 서버")
    expect(serialized).toContain("자연어 검색 서비스(AI 큐레이터)")
    expect(serialized).not.toMatch(/\b(?:TODO|TBD|FIXME)\b/i)
  })

  it("keeps the English resume available", () => {
    expect(getResumeData("en").personalInfo.name).toBe("Juahn Jeong")
  })
})
