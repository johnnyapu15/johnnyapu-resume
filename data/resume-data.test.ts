import { describe, expect, it } from "vitest"

import { resumeData } from "@/data/resume-data"

const languages = ["ko", "en"] as const

function expectBalancedBoldMarkers(text: string) {
  const markerCount = text.match(/\*\*/g)?.length ?? 0
  expect(markerCount % 2, `unbalanced bold markers in: ${text}`).toBe(0)
}

describe.each(languages)("resume data invariants (%s)", language => {
  const data = resumeData[language]

  it("contains all sections used by the general resume", () => {
    expect(data.summary.trim()).not.toBe("")
    expect(data.experience.length).toBeGreaterThan(0)
    expect(data.keyExperience.length).toBeGreaterThan(0)
    expect(data.education.length).toBeGreaterThan(0)
  })

  it("does not expose draft markers", () => {
    expect(JSON.stringify(data)).not.toMatch(/\b(?:TODO|TBD|FIXME)\b/i)
  })

  it("has complete experience entries", () => {
    for (const experience of data.experience) {
      expect(experience.company.trim()).not.toBe("")
      expect(experience.period.trim()).not.toBe("")
      expect(experience.description.length).toBeGreaterThan(0)

      for (const description of experience.description) {
        expect(description.trim()).not.toBe("")
        expectBalancedBoldMarkers(description)
      }
    }
  })

  it("has complete summary views for every visible key experience", () => {
    for (const experience of data.keyExperience.filter(item => !item.onlyDetailView)) {
      expect(experience.name.trim()).not.toBe("")
      expect(experience.summaryView, `${experience.name} is missing summaryView`).toBeDefined()
      expect(experience.summaryView?.problem.trim()).not.toBe("")
      expect(experience.summaryView?.approach.trim()).not.toBe("")
      expect(experience.summaryView?.result.trim()).not.toBe("")

      expectBalancedBoldMarkers(experience.summaryView?.problem ?? "")
      expectBalancedBoldMarkers(experience.summaryView?.approach ?? "")
      expectBalancedBoldMarkers(experience.summaryView?.result ?? "")
    }
  })

  it("uses unique key experience names", () => {
    const names = data.keyExperience.map(item => item.name)
    expect(new Set(names).size).toBe(names.length)
  })
})
