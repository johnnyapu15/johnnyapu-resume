"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { resumeData } from "@/data/resume-data"
import type { InterpersonalSkill, KeyExperience, Language, Skill } from "@/types/resume"
import { labels } from "@/types/resume"
import {
  Award,
  BookOpen,
  Building,
  Calendar,
  Code,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Server,
  Sparkles,
  Star,
  PenToolIcon as Tool,
  Users
} from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"
import { LanguageToggle } from "./language-toggle"

interface ResumeTemplateProps {
  defaultLanguage?: Language
  isPrintPreview?: boolean
}

// Helper function to render text with **text** as bold
const renderWithBold = (text: string) => {
  if (!text) return null

  const parts = text.split(/(\*\*.*?\*\*)/g)

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-gray-800">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}

// Helper component for rendering a skill category
const SkillCategory = ({
  title,
  icon,
  skills,
}: {
  title: string
  icon: React.ReactNode
  skills: Skill[] | undefined
}) => {
  if (!skills || skills.length === 0) return null

  return (
    <div className="bg-leather-50 p-4 print:p-reduced rounded-lg">
      <h3 className="font-semibold text-leather-800 mb-4 print:mb-2 flex items-center">
        {icon}
        {title}
      </h3>
      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, j) => (
                <div
                  key={j}
                  className={`h-3 w-3 rounded-full ml-1 ${
                    j < skill.level ? "bg-leather-600" : "bg-leather-200"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const InterpersonalSkillsSection = ({
  title,
  icon,
  skills,
}: {
  title: string
  icon: React.ReactNode
  skills: InterpersonalSkill[] | undefined
}) => {
  if (!skills || skills.length === 0) return null

  return (
    <div className="md:col-span-2">
      <h3 className="font-semibold text-leather-800 mb-4 print:mb-2 flex items-center text-lg">
        {icon}
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-reduced">
        {skills.map((skill, i) => (
          <div key={i} className="bg-leather-50 p-4 rounded-lg flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-base text-leather-800">{skill.name}</p>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div
                    key={j}
                    className={`h-3 w-3 rounded-full ml-1 ${
                      j < skill.level ? "bg-leather-600" : "bg-leather-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2 flex-grow">{skill.description}</p>
            <p className="text-xs text-gray-500 italic mt-auto">{skill.examples}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const KeyExperienceSection = ({
  title,
  icon,
  experiences,
  language,
  isDetailed,
}: {
  title: string
  icon: React.ReactNode
  experiences: KeyExperience[] | undefined
  language: Language
  isDetailed: boolean
}) => {
  if (!experiences || experiences.length === 0) return null

  const experiencesToShow = isDetailed
    ? experiences
    : experiences.filter(exp => !exp.onlyDetailView).slice(0, 2)

  const sectionLabels = {
    ko: {
      problem: "문제",
      approach: "접근",
      result: "결과",
      action: "Action",
    },
    en: {
      problem: "Problem",
      approach: "Approach",
      result: "Result",
      action: "Action",
    },
  }

  return (
    <div className={`mb-8 ${!isDetailed ? 'print-avoid-break' : ''}`}>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
        {icon}
        {title}
      </h2>
      <div className={`grid gap-6 ${isDetailed ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        {experiencesToShow.map((exp, i) => {
          if (isDetailed && exp.detail) {
            // 상세 보기 (STAR) 뷰
            return (
              <div key={i} className={`bg-leather-50 p-6 rounded-lg flex flex-col ${i === 0 ? 'key-experience-first' : ''} print-avoid-break`}>
                <h3 className="text-xl font-bold text-leather-800 mb-4">{exp.name}</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <strong className="font-semibold text-gray-800 text-base">{labels[language].situation}</strong>
                    <div className="mt-1 space-y-1 text-gray-700">
                      {exp.detail.situation.map((item, j) => (
                        <p key={j} className="flex items-start">
                          <span className="mr-2 mt-1">∙</span>
                          <span>{renderWithBold(item)}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-800 text-base">{labels[language].task}</strong>
                    <div className="mt-1 space-y-1 text-gray-700">
                      {exp.detail.task.map((item, j) => (
                        <p key={j} className="flex items-start">
                          <span className="mr-2 mt-1">∙</span>
                          <span>{renderWithBold(item)}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-800 text-base">{labels[language].action}</strong>
                    <div className="mt-1 space-y-1 text-gray-700">
                      {exp.detail.action.map((item, j) => (
                        <p key={j} className="flex items-start">
                          <span className="mr-2 mt-1">∙</span>
                          <span>{renderWithBold(item)}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-800 text-base">{labels[language].result}</strong>
                    <div className="mt-1 space-y-1 text-gray-700">
                      {(exp.detail.result || exp.result).map((item, j) => (
                        <p key={j} className="flex items-start">
                          <span className="mr-2 mt-1">∙</span>
                          <span>{renderWithBold(item)}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          // 기본 (요약) 뷰
          return (
            <div key={i} className="bg-leather-50 p-4 rounded-lg flex flex-col">
              <h3 className="text-lg font-semibold text-leather-700 mb-4">{exp.name}</h3>
              <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-3 text-sm">
                <strong className="font-semibold text-gray-800 pt-0.5">{sectionLabels[language].problem}</strong>
                <div className="space-y-1 text-gray-700">
                  {exp.problem.map((item, j) => (
                    <p key={j}>{renderWithBold(item)}</p>
                  ))}
                </div>

                <strong className="font-semibold text-gray-800 pt-0.5">{sectionLabels[language].approach}</strong>
                <div className="space-y-1 text-gray-700">
                  {exp.approach.map((item, j) => (
                    <p key={j}>{renderWithBold(item)}</p>
                  ))}
                </div>

                <strong className="font-semibold text-gray-800 pt-0.5">{sectionLabels[language].result}</strong>
                <div className="space-y-1 text-gray-700">
                  {exp.result.map((item, j) => (
                    <p key={j}>{renderWithBold(item)}</p>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function ResumeTemplate({ defaultLanguage = "ko", isPrintPreview = false }: ResumeTemplateProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [isDetailed, setIsDetailed] = useState(false)
  
  // useEffect를 사용해서 클라이언트에서만 searchParams를 읽도록 처리
  React.useEffect(() => {
    if (searchParams) {
      setIsDetailed(searchParams.get("isDetail") === "true")
    }
  }, [searchParams])
  
  const data = resumeData[language]

  const handlePrint = () => {
    window.print()
  }

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  const handleToggleDetail = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    if (isDetailed) {
      newSearchParams.delete("isDetail")
    } else {
      newSearchParams.set("isDetail", "true")
    }
    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false })
  }

  return (
    <div className="max-w-4xl mx-auto print-layout-compact">
      {!isPrintPreview && (
        <div className="flex justify-between items-center mb-4 print:hidden">
          <div className="flex gap-2">
            <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
            <Button variant="outline" onClick={handleToggleDetail} className="bg-white hover:bg-gray-50">
              <BookOpen className="mr-2 h-4 w-4" />
              {isDetailed ? labels[language].summary : labels[language].details}
            </Button>
          </div>
          <Button variant="outline" onClick={handlePrint} className="bg-white hover:bg-gray-50">
            <Printer className="mr-2 h-4 w-4" />
            {labels[language].print}
          </Button>
        </div>
      )}

      <Card id="resume-content" className="overflow-hidden bg-white shadow-md print:shadow-none print:bg-white">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-leather-800 to-leather-600 text-white p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold mb-1">{data.personalInfo.name}</h1>
              <p className="text-leather-100 text-base">{data.personalInfo.position}</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-3 text-leather-50 text-sm">
              {data.personalInfo.email && (
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.address && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{data.personalInfo.address}</span>
                </div>
              )}
              {data.personalInfo.linkedin && (
                <div className="flex items-center">
                  <Linkedin className="h-4 w-4 mr-2" />
                  <span>{data.personalInfo.linkedin}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* 자기소개 */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">{renderWithBold(data.summary)}</p>
          </div>

          {/* 경력 사항 */}
          <div className="mb-8 print-avoid-break">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <Building className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].experience}
            </h2>
            {data.experience
              .filter(exp => !isDetailed || !exp.hiddenInDetailView)
              .map((exp, index) => (
              <div key={index} className={`${index !== data.experience.filter(e => !isDetailed || !e.hiddenInDetailView).length - 1 ? "mb-8" : ""}`}>
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
                <ul className="list-disc pl-5 text-gray-700 space-y-1.5">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className={`print:text-sm ${
                        desc.startsWith(" ") ? "ml-4 text-gray-600" : desc.startsWith("  ") ? "ml-8 text-gray-600" : ""
                      }`}
                    >
                      {renderWithBold(desc)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 주요 경험 */}
          <KeyExperienceSection
            title={labels[language].keyExperience}
            icon={<Star className="h-6 w-6 mr-3 text-leather-600" />}
            experiences={data.keyExperience}
            language={language}
            isDetailed={isDetailed}
          />

          {/* 기술 스택 */}
          <div className="mb-8 print-avoid-break">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <Code className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].skills}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCategory
                title={labels[language].programmingLanguages}
                icon={<Code className="h-4 w-4 mr-2" />}
                skills={data.skills.languages}
              />
              <SkillCategory
                title={labels[language].frameworksAndLibraries}
                icon={<Code className="h-4 w-4 mr-2" />}
                skills={data.skills.frameworks}
              />
              <SkillCategory
                title={labels[language].backendInfra}
                icon={<Server className="h-4 w-4 mr-2" />}
                skills={data.skills.backendInfra}
              />
              <SkillCategory
                title={labels[language].toolsAndEnvironments}
                icon={<Tool className="h-4 w-4 mr-2" />}
                skills={data.skills.tools}
              />
              <SkillCategory
                title={labels[language].aiTools}
                icon={<Sparkles className="h-4 w-4 mr-2" />}
                skills={data.skills["ai-tools"]}
              />
              <InterpersonalSkillsSection
                title={labels[language].interpersonal}
                icon={<Users className="h-5 w-5 mr-2 text-leather-700" />}
                skills={data.skills.interpersonal}
              />
            </div>
          </div>

          {/* 주요 프로젝트 */}
          {data.projects && data.projects.length > 0 && (
            <div className="print-avoid-break">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
                <Award className="h-5 w-5 mr-2 text-leather-700" />
                {labels[language].projects}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {data.projects.map((project, index) => (
                  <div key={index} className="bg-leather-50 p-5 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-leather-700">{project.name}</h3>
                      <div className="flex items-center text-gray-600 mt-1 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    {Array.isArray(project.description) ? (
                      <ul className="list-disc pl-5 text-gray-700 space-y-1.5">
                        {project.description.map((desc, i) => (
                          <li
                            key={i}
                            className={`print:text-sm ${
                              desc.startsWith(" ") ? "ml-4 text-gray-600" : desc.startsWith("  ") ? "ml-8 text-gray-600" : ""
                            }`}
                          >
                            {renderWithBold(desc)}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700">{renderWithBold(project.description)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 학력 사항 */}
          <div className="mb-8 print-avoid-break">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].education}
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className={`${index !== data.education.length - 1 ? "mb-4" : ""}`}>
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
        </div>
      </Card>
    </div>
  )
}
