"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { resumeData } from "@/data/resume-data"
import type { InterpersonalSkill, Language, Skill } from "@/types/resume"
import { labels } from "@/types/resume"
import {
  Award,
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
  PenToolIcon as Tool,
  Users,
} from "lucide-react"
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
    <div className="max-w-4xl mx-auto print-layout-compact">
      {!isPrintPreview && (
        <div className="flex justify-between items-center mb-4 print:hidden">
          <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
          <Button variant="outline" onClick={handlePrint} className="bg-white hover:bg-gray-50">
            <Printer className="mr-2 h-4 w-4" />
            {labels[language].print}
          </Button>
        </div>
      )}

      <Card id="resume-content" className="overflow-hidden bg-white shadow-md print:shadow-none print:bg-white">
        {/* 헤더 섹션 */}
        <div className="bg-gradient-to-r from-leather-800 to-leather-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-1">{data.personalInfo.name}</h1>
          <p className="text-leather-100 text-lg mb-4">{data.personalInfo.position}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-leather-50 mt-4 print:gap-reduced">
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

          {/* 학력 사항 */}
          <div className="mb-8 print-avoid-break">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
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
          <div className="mb-8 print-avoid-break">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-leather-200 pb-2 flex items-center">
              <Code className="h-5 w-5 mr-2 text-leather-700" />
              {labels[language].skills}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-reduced">
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
              <div className="md:col-span-2">
                <SkillCategory
                  title={labels[language].aiTools}
                  icon={<Sparkles className="h-4 w-4 mr-2" />}
                  skills={data.skills["ai-tools"]}
                />
              </div>
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
              <div className="grid grid-cols-1 gap-6 print:gap-4">
                {data.projects.map((project, index) => (
                  <div key={index} className="bg-leather-50 p-5 print:p-3 rounded-lg">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-leather-700">{project.name}</h3>
                      <div className="flex items-center text-gray-600 mt-1 md:mt-0">
                        <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    {Array.isArray(project.description) ? (
                      <ul className="list-disc pl-5 text-gray-700 space-y-1.5 print:space-y-1">
                        {project.description.map((desc, i) => (
                          <li
                            key={i}
                            className={`print:text-sm ${
                              desc.startsWith("-")
                                ? "ml-4 text-gray-600"
                                : desc.startsWith("  -")
                                ? "ml-8 text-gray-600"
                                : ""
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
        </div>
      </Card>
    </div>
  )
}
