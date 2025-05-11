export interface PersonalInfo {
  name: string
  nameEn: string
  email: string
  phone: string
  address: string
  linkedin: string
  position?: string
}

export interface Experience {
  company: string
  position: string
  period: string
  location: string
  description: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  description: string
}

export interface Skills {
  languages: string[]
  frameworks: string[]
  databases: string[]
  tools: string[]
}

export interface Project {
  name: string
  period: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
}

export interface Activity {
  name: string
  period: string
  description: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  summary: string
  experience: Experience[]
  education: Education[]
  skills: Skills
  projects: Project[]
  certifications: Certification[]
  activities: Activity[]
}

export interface MultiLanguageResumeData {
  ko: ResumeData
  en: ResumeData
}

export type Language = "ko" | "en"

export interface SectionLabels {
  introduction: string
  experience: string
  education: string
  skills: string
  projects: string
  programmingLanguages: string
  frameworksAndLibraries: string
  databases: string
  toolsAndEnvironments: string
  print: string
}

export const labels: Record<Language, SectionLabels> = {
  ko: {
    introduction: "자기소개",
    experience: "경력 사항",
    education: "학력 사항",
    skills: "기술 스택",
    projects: "주요 프로젝트",
    programmingLanguages: "프로그래밍 언어",
    frameworksAndLibraries: "프레임워크 및 라이브러리",
    databases: "데이터베이스",
    toolsAndEnvironments: "개발 도구 및 환경",
    print: "인쇄하기",
  },
  en: {
    introduction: "Introduction",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    programmingLanguages: "Programming Languages",
    frameworksAndLibraries: "Frameworks & Libraries",
    databases: "Databases",
    toolsAndEnvironments: "Tools & Environments",
    print: "Print",
  },
}
