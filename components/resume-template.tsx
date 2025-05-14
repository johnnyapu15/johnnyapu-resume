"use client"

import { useState } from "react"
import {
  Printer,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Award,
  Calendar,
  Building,
  GraduationCap,
  Code,
  Server,
  PenToolIcon as Tool,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { resumeData } from "@/data/resume-data"
import type { Language } from "@/types/resume"
import { labels } from "@/types/resume"
import { LanguageToggle } from "./language-toggle"
import { PrintPreview } from "./print-preview"

interface ResumeTemplateProps {
  defaultLanguage?: Language
  isPrintPreview?: boolean
}

export default function ResumeTemplate({ defaultLanguage = "ko", isPrintPreview = false }: ResumeTemplateProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const data = resumeData[language]

  const handlePrint = () => {
    window.print()
  }

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!isPrintPreview && (
        <div className="flex justify-between items-center mb-4 print:hidden">
          <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
          <div className="flex gap-2">
            <PrintPreview language={language} onPrint={handlePrint} />
            <Button variant="outline" onClick={handlePrint} className="bg-white hover:bg-gray-50">
              <Printer className="mr-2 h-4 w-4" />
              {labels[language].print}
            </Button>
          </div>
        </div>
      )}

      <Card id="resume-content" className="overflow-hidden bg-white shadow-md print:shadow-none print:bg-white">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-leather-800 to-leather-600 text-white p-8 print:p-reduced">
          <h1 className="text-4xl font-bold mb-1">{data.personalInfo.name}</h1>
          <p className="text-leather-100 text-lg mb-4">Software Engineer</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-leather-50 mt-4 print:gap-reduced">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{data.personalInfo.address}</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-2" />
              <span>{data.personalInfo.linkedin}</span>
            </div>
          </div>
        </div>

        <div className="p-8 print:p-reduced">
          {/* 자기소개 */}
          <div className="mb-8 print:mb-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-leather-200 pb-2">
              {labels[language].introduction}
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </div>

          {/* 경력 사항 */}
          <div className="mb-8 print:mb-4">
            <h2 className="text-2xl font-bold mb-6 print:mb-3 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <Building className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].experience}
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className={`${index !== data.experience.length - 1 ? "mb-8 print:mb-4" : ""}`}>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-leather-700">{exp.company}</h3>
                    <p className="text-gray-700 font-medium">{exp.position}</p>
                  </div>
                  <div className="flex items-center text-gray-600 mt-1 md:mt-0">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2 text-sm">{exp.location}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1.5 print:space-y-1">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className={`print:text-sm ${
                        desc.startsWith("-") ? "ml-4 text-gray-600" : desc.startsWith("  -") ? "ml-8 text-gray-600" : ""
                      }`}
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 학력 사항 */}
          <div className="mb-8 print:mb-4">
            <h2 className="text-2xl font-bold mb-6 print:mb-3 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].education}
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className={`${index !== data.education.length - 1 ? "mb-4 print:mb-2" : ""}`}>
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <div>
                    <h3 className="text-lg font-semibold text-leather-700">{edu.school}</h3>
                    <p className="text-gray-700">{edu.degree}</p>
                  </div>
                  <div className="flex items-center text-gray-600 mt-1 md:mt-0">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                {edu.description && <p className="text-gray-700 print:text-sm">{edu.description}</p>}
              </div>
            ))}
          </div>

          {/* 기술 스택 */}
          <div className="mb-8 print:mb-4">
            <h2 className="text-2xl font-bold mb-6 print:mb-3 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <Code className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].skills}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-reduced">
              <div className="bg-leather-50 p-4 print:p-reduced rounded-lg">
                <h3 className="font-semibold text-leather-800 mb-3 print:mb-2 flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  {labels[language].programmingLanguages}
                </h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {data.skills.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="bg-leather-100 text-leather-800 px-3 py-1 rounded-full text-sm print:text-xs"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-leather-50 p-4 print:p-reduced rounded-lg">
                <h3 className="font-semibold text-leather-800 mb-3 print:mb-2 flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  {labels[language].frameworksAndLibraries}
                </h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {data.skills.frameworks.map((framework, i) => (
                    <span
                      key={i}
                      className="bg-leather-100 text-leather-800 px-3 py-1 rounded-full text-sm print:text-xs"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
              {data.skills.backendInfra && (
                <div className="bg-leather-50 p-4 print:p-reduced rounded-lg">
                  <h3 className="font-semibold text-leather-800 mb-3 print:mb-2 flex items-center">
                    <Server className="h-4 w-4 mr-2" />
                    {labels[language].backendInfra}
                  </h3>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {data.skills.backendInfra.map((infra, i) => (
                      <span
                        key={i}
                        className="bg-leather-100 text-leather-800 px-3 py-1 rounded-full text-sm print:text-xs"
                      >
                        {infra}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="bg-leather-50 p-4 print:p-reduced rounded-lg">
                <h3 className="font-semibold text-leather-800 mb-3 print:mb-2 flex items-center">
                  <Tool className="h-4 w-4 mr-2" />
                  {labels[language].toolsAndEnvironments}
                </h3>
                <div className="flex flex-wrap gap-2 print:gap-1">
                  {data.skills.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-leather-100 text-leather-800 px-3 py-1 rounded-full text-sm print:text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {data.skills["ai-tools"] && (
                <div className="bg-leather-50 p-4 print:p-reduced rounded-lg md:col-span-2">
                  <h3 className="font-semibold text-leather-800 mb-3 print:mb-2 flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    {labels[language].aiTools}
                  </h3>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {data.skills["ai-tools"].map((tool, i) => (
                      <span
                        key={i}
                        className="bg-leather-100 text-leather-800 px-3 py-1 rounded-full text-sm print:text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 주요 프로젝트 */}
          <div>
            <h2 className="text-2xl font-bold mb-6 print:mb-3 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <Award className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].projects}
            </h2>
            <div className="grid grid-cols-1 gap-6 print:gap-4">
              {data.projects.map((project, index) => (
                <div key={index} className="bg-leather-50 p-5 print:p-3 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-leather-800">{project.name}</h3>
                    <span className="text-gray-600 text-sm mt-1 md:mt-0">{project.period}</span>
                  </div>
                  {Array.isArray(project.description) ? (
                    <ul className="list-disc pl-5 text-gray-700 space-y-1.5 print:space-y-1 mt-2">
                      {project.description.map((desc, i) => (
                        <li key={i} className="print:text-sm">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 print:text-sm">{project.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
