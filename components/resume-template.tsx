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
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Pencil,
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
import AdminCommentSystem from "./admin-comment-system"
import { LanguageToggle } from "./language-toggle"

interface ResumeTemplateProps {
  defaultLanguage?: Language
  isPrintPreview?: boolean
}

// Helper function to render text with **text** as bold
const renderWithBold = (text: string) => {
  if (!text) return null

  const lines = text.split("\n")

  return (
    <>
      {lines.map((line, li) => (
        <span key={li}>
          {li > 0 && <br />}
          {line.split(/(\*\*.*?\*\*)/g).map((part, pi) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={pi} className="font-semibold text-gray-800">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            ),
          )}
        </span>
      ))}
    </>
  )
}

const getIndentedBulletClass = (desc: string) => {
  if (desc.startsWith("  ")) return "ml-8 text-gray-600"
  if (desc.startsWith(" ")) return "ml-4 text-gray-600"
  return ""
}

const formatDateTime = (date: Date, timeZone: string) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date)

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? ""

  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`
}

const renderSectionParagraphs = (items: string[]) => {
  const paragraphs: string[] = []
  let current = ""

  items.forEach(item => {
    const trimmed = item.trim()
    if (!trimmed) return

    if (item.startsWith("  ")) {
      if (current) paragraphs.push(current)
      paragraphs.push(trimmed)
      current = ""
      return
    }

    current = current ? `${current} ${trimmed}` : trimmed
  })

  if (current) paragraphs.push(current)

  return paragraphs.map((paragraph, i) => (
    <p key={i}>{renderWithBold(paragraph)}</p>
  ))
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

const CompactSkillList = ({
  title,
  items,
}: {
  title: string
  items: Skill[] | undefined
}) => {
  if (!items || items.length === 0) return null

  return (
    <div className="bg-leather-50 p-4 rounded-lg">
      <h3 className="font-semibold text-leather-800 mb-2 text-sm">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{items.map(item => item.name).join(", ")}</p>
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
    : experiences.filter(exp => !exp.onlyDetailView)

  if (experiencesToShow.length === 0) return null

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
      <div className="grid grid-cols-1 gap-6">
        {experiencesToShow.map((exp, i) => {
          const isFirstCard = false
          const summaryView = exp.summaryView

          return (
            <div key={i} className={`bg-leather-50 p-4 rounded-lg flex flex-col ${isFirstCard ? "md:col-span-2" : ""}`}>
              <h3 className="text-base font-semibold text-leather-700 mb-3">{exp.name}</h3>
              <div className="space-y-3 leading-snug print:text-[0.85rem]">
                <div>
                  <strong className="block font-semibold text-gray-800 mb-1">{sectionLabels[language].problem}</strong>
                  <p className="text-gray-700">{renderWithBold(summaryView.problem)}</p>
                </div>

                <div>
                  <strong className="block font-semibold text-gray-800 mb-1">{sectionLabels[language].approach}</strong>
                  <p className="text-gray-700">{renderWithBold(summaryView.approach)}</p>
                </div>

                <div>
                  <strong className="block font-semibold text-gray-800 mb-1">{sectionLabels[language].result}</strong>
                  <p className="text-gray-700">{renderWithBold(summaryView.result)}</p>
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
  const buildTimeRaw = process.env.BUILD_TIME ?? ""

  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [isDetailed, setIsDetailed] = useState(false)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [showPasswordDialog, setShowPasswordDialog] = useState(false)
  const [passwordInput, setPasswordInput] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [buildTimeUtc, setBuildTimeUtc] = useState("")
  const [buildTimeLocal, setBuildTimeLocal] = useState("")
  const [buildTimeZone, setBuildTimeZone] = useState("")

  const verifyPassword = async () => {
    setVerifying(true)
    try {
      const res = await fetch("/api/admin/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput }),
      })
      if (res.ok) {
        setIsAdminMode(true)
        setShowPasswordDialog(false)
      } else {
        setPasswordError(true)
      }
    } catch {
      setPasswordError(true)
    } finally {
      setVerifying(false)
    }
  }
  
  // useEffect를 사용해서 클라이언트에서만 searchParams를 읽도록 처리
  React.useEffect(() => {
    if (searchParams) {
      setIsDetailed(searchParams.get("isDetail") === "true")
      const lang = searchParams.get("lang")
      if (lang === "en" || lang === "ko") {
        setLanguage(lang)
      }
    }
  }, [searchParams])

  React.useEffect(() => {
    if (!buildTimeRaw) return
    const parsed = new Date(buildTimeRaw)
    if (Number.isNaN(parsed.getTime())) return

    const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setBuildTimeUtc(formatDateTime(parsed, "UTC"))
    setBuildTimeZone(detectedTimeZone || "")
    if (detectedTimeZone) {
      setBuildTimeLocal(formatDateTime(parsed, detectedTimeZone))
    }
  }, [buildTimeRaw])
  
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
    <div className={`max-w-4xl mx-auto print-layout-compact ${isAdminMode ? "mr-[336px] mt-10" : ""}`}>
      {!isPrintPreview && (
        <div className="flex justify-between items-center mb-4 print:hidden">
          <div className="flex gap-2">
            <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
            <Button variant="outline" onClick={handleToggleDetail} className="bg-white hover:bg-gray-50">
              <BookOpen className="mr-2 h-4 w-4" />
              {isDetailed ? labels[language].summary : labels[language].details}
            </Button>
          </div>
          <div className="flex gap-2">
            <a href={language === "en" ? "/resume-en.pdf" : "/resume.pdf"} download className="inline-flex items-center">
              <Button variant="outline" className="bg-white hover:bg-gray-50">
                <Download className="mr-2 h-4 w-4" />
                {labels[language].download}
              </Button>
            </a>
            <Button variant="outline" onClick={handlePrint} className="bg-white hover:bg-gray-50">
              <Printer className="mr-2 h-4 w-4" />
              {labels[language].print}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowPasswordDialog(true)
                setPasswordInput("")
                setPasswordError(false)
              }}
              className="bg-white hover:bg-gray-50"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Password dialog */}
      {showPasswordDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[70] print:hidden">
          <form
            className="bg-white rounded-lg shadow-xl p-6 w-80"
            onSubmit={e => {
              e.preventDefault()
              if (!verifying) verifyPassword()
            }}
            autoComplete="on"
          >
            <h3 className="font-semibold text-gray-800 mb-3">리뷰 모드</h3>
            <input
              type="text"
              name="username"
              autoComplete="username"
              defaultValue="admin"
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
            />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={passwordInput}
              onChange={e => {
                setPasswordInput(e.target.value)
                setPasswordError(false)
              }}
              onKeyDown={e => {
                if (e.key === "Escape") setShowPasswordDialog(false)
              }}
              placeholder="비밀번호를 입력하세요"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                passwordError ? "border-red-400" : "border-gray-300"
              }`}
              autoFocus
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">비밀번호가 틀립니다</p>
            )}
            <div className="flex justify-end gap-2 mt-4">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowPasswordDialog(false)}
              >
                취소
              </Button>
              <Button
                type="submit"
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-white"
                disabled={verifying}
              >
                {verifying ? "확인 중..." : "확인"}
              </Button>
            </div>
          </form>
        </div>
      )}

      <div id="resume-content">
      <Card className="overflow-hidden bg-white shadow-md print:shadow-none print:bg-white">
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

          {data.coreStrengths && data.coreStrengths.length > 0 && (
            <div className="mb-8 print-avoid-break">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
                <Server className="h-5 w-5 mr-2 text-leather-700" />
                {labels[language].coreStrengths}
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1.5">
                {data.coreStrengths.map((item, index) => (
                  <li key={index} className="print:text-sm">
                    {renderWithBold(item)}
                  </li>
                ))}
              </ul>
            </div>
          )}

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
                      className={`print:text-sm ${getIndentedBulletClass(desc)}`}
                    >
                      {renderWithBold(desc)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 학력 사항 */}
          <div className="mb-8 print-avoid-break">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].education}
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className={`flex items-baseline justify-between text-sm ${index !== data.education.length - 1 ? "mb-1" : ""}`}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-leather-700">{edu.school}</h3>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-700">{edu.degree}</span>
                  {edu.description && (
                    <>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600">{edu.description}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center text-gray-500 flex-shrink-0 ml-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Card>

      {/* 2페이지 시작 */}
      <Card className="overflow-hidden bg-white shadow-md print:shadow-none print:bg-white mt-8 print:mt-0 print-page-break-before">
        <div className="p-8">
          <KeyExperienceSection
            title={labels[language].keyExperience}
            icon={<Star className="h-6 w-6 mr-3 text-leather-600" />}
            experiences={data.keyExperience}
            language={language}
            isDetailed={isDetailed}
          />

          {/* Skills section removed — tech stack is covered in experience bullets */}

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
                            className={`print:text-sm ${getIndentedBulletClass(desc)}`}
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
        </div>
      </Card>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4 print:hidden">
        Built UTC {buildTimeUtc}
        {buildTimeLocal ? ` | ${buildTimeZone} ${buildTimeLocal}` : ""}
      </p>

      {isAdminMode && (
        <AdminCommentSystem
          language={language}
          adminPassword={passwordInput}
          onExit={() => setIsAdminMode(false)}
        />
      )}
    </div>
  )
}
