"use client"
import { Button } from "@/components/ui/button"
import type { Language } from "@/types/resume"

interface LanguageToggleProps {
  language: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center space-x-2 bg-white rounded-full p-1 shadow-sm border border-gray-200">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onLanguageChange("ko")}
        className={`rounded-full px-3 ${
          language === "ko"
            ? "bg-leather-700 text-white hover:bg-leather-800"
            : "bg-transparent text-gray-600 hover:bg-gray-100"
        }`}
      >
        한국어
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onLanguageChange("en")}
        className={`rounded-full px-3 ${
          language === "en"
            ? "bg-leather-700 text-white hover:bg-leather-800"
            : "bg-transparent text-gray-600 hover:bg-gray-100"
        }`}
      >
        English
      </Button>
    </div>
  )
}
