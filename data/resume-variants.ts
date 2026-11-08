import { resumeData } from "@/data/resume-data"
import type { Language, ResumeData } from "@/types/resume"

export function getResumeData(language: Language): ResumeData {
  return resumeData[language]
}
