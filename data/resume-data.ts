import type { MultiLanguageResumeData } from "@/types/resume"
// 확장자 없이 import 합니다.
import { resumeDataKo } from "./resume-data.ko"
import { resumeDataEn } from "./resume-data.en"

export const resumeData: MultiLanguageResumeData = {
  // 이제 resumeDataKo와 resumeDataEn은 ResumeData 타입이므로 바로 할당합니다.
  ko: resumeDataKo,
  en: resumeDataEn,
}
