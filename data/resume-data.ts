import type { MultiLanguageResumeData } from "@/types/resume"
import { resumeDataKo } from "./resume-data.ko"
import { resumeDataEn } from "./resume-data.en"

export const resumeData: MultiLanguageResumeData = {
  ko: resumeDataKo.ko,
  en: resumeDataEn.en,
}
