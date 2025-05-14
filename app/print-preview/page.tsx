"use client"

import { useSearchParams } from "next/navigation"
import ResumeTemplate from "@/components/resume-template"
import { useEffect } from "react"

export default function PrintPreviewPage() {
  const searchParams = useSearchParams()
  const lang = (searchParams.get("lang") as "ko" | "en") || "ko"

  useEffect(() => {
    // 미리보기 페이지에서는 언어를 URL 파라미터로 받아서 설정
    document.documentElement.classList.add("print-preview")

    return () => {
      document.documentElement.classList.remove("print-preview")
    }
  }, [])

  return (
    <div className="print-preview-container">
      <ResumeTemplate defaultLanguage={lang} isPrintPreview={true} />
    </div>
  )
}
