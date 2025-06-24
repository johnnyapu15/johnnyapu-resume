export interface PersonalInfo {
  name: string
  nameEn: string
  email: string
  phone?: string
  address?: string
  linkedin?: string
  position?: string
}

export interface Experience {
  company: string
  position?: string
  period: string
  location?: string
  description: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface InterpersonalSkill {
  name: string
  description: string
  examples: string
  level: number
}

export interface Skills {
  languages: Skill[]
  frameworks: Skill[]
  databases?: Skill[]
  backendInfra?: Skill[]
  tools: Skill[]
  "ai-tools"?: Skill[]
  interpersonal?: InterpersonalSkill[]
}

export interface Project {
  name: string
  period: string
  description: string[] | string
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

export interface KeyExperience {
  name: string
  problem: string[]
  approach: string[]
  result: string[]
  detail?: {
    situation: string[]
    task: string[]
    action: string[]
    result?: string[]
  }
  onlyDetailView?: boolean
}

export interface ResumeData {
  personalInfo: PersonalInfo
  summary: string
  experience: Experience[]
  keyExperience: KeyExperience[]
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
  keyExperience: string
  education: string
  skills: string
  projects: string
  programmingLanguages: string
  frameworksAndLibraries: string
  databases: string
  backendInfra: string
  toolsAndEnvironments: string
  aiTools: string
  interpersonal: string
  print: string
  situation: string
  task: string
  action: string
  result: string
  summary: string
  details: string
}

export const labels: Record<Language, SectionLabels> = {
  ko: {
    introduction: "자기소개",
    experience: "경력 사항",
    keyExperience: "주요 경험",
    education: "학력 사항",
    skills: "기술 스택",
    projects: "주요 프로젝트",
    programmingLanguages: "프로그래밍 언어",
    frameworksAndLibraries: "프레임워크 및 라이브러리",
    databases: "데이터베이스",
    backendInfra: "백엔드 인프라",
    toolsAndEnvironments: "협업 도구",
    aiTools: "AI 도구",
    interpersonal: "Interpersonal Skills",
    print: "인쇄하기",
    situation: "Situation",
    task: "Task",
    action: "Action",
    result: "Result",
    summary: "요약 보기",
    details: "상세 보기",
  },
  en: {
    introduction: "Introduction",
    experience: "Experience",
    keyExperience: "Key Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    programmingLanguages: "Programming Languages",
    frameworksAndLibraries: "Frameworks & Libraries",
    databases: "Databases",
    backendInfra: "Backend Infrastructure",
    toolsAndEnvironments: "Collaboration Tools",
    aiTools: "AI Tools",
    interpersonal: "Interpersonal Skills",
    print: "Print",
    situation: "Situation",
    task: "Task",
    action: "Action",
    result: "Result",
    summary: "Summary",
    details: "Details",
  },
}
