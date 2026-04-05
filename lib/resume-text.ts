import { resumeData } from "@/data/resume-data"
import type { Language, ResumeData, Skill } from "@/types/resume"

function cleanInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function pushSection(lines: string[], title: string) {
  lines.push("")
  lines.push(title)
}

function formatSkills(items: Skill[] | undefined): string {
  if (!items || items.length === 0) return ""
  return items.map((item) => item.name).join(", ")
}

function buildResumeText(data: ResumeData, language: Language): string {
  const lines: string[] = []
  const sectionTitles =
    language === "ko"
      ? {
          summary: "요약",
          experience: "경력",
          keyExperience: "주요 경험",
          education: "학력",
          skills: "기술",
        }
      : {
          summary: "Summary",
          experience: "Experience",
          keyExperience: "Key Experience",
          education: "Education",
          skills: "Skills",
        }

  lines.push("Name: " + data.personalInfo.name)
  if (data.personalInfo.position) {
    lines.push("Position: " + data.personalInfo.position)
  }
  lines.push("Email: " + data.personalInfo.email)

  pushSection(lines, sectionTitles.summary)
  lines.push(cleanInlineMarkdown(data.summary))

  pushSection(lines, sectionTitles.experience)
  for (const exp of data.experience) {
    const heading = exp.position ? `${exp.company} | ${exp.position}` : exp.company
    lines.push(`- ${heading}`)
    lines.push(`  Period: ${exp.period}`)
    for (const desc of exp.description) {
      lines.push(`  - ${cleanInlineMarkdown(desc)}`)
    }
  }

  pushSection(lines, sectionTitles.keyExperience)
  for (const key of data.keyExperience) {
    lines.push(`- ${cleanInlineMarkdown(key.name)}`)
    if (key.summaryView) {
      lines.push(`  Problem: ${cleanInlineMarkdown(key.summaryView.problem)}`)
      lines.push(`  Approach: ${cleanInlineMarkdown(key.summaryView.approach)}`)
      lines.push(`  Result: ${cleanInlineMarkdown(key.summaryView.result)}`)
    }
  }

  pushSection(lines, sectionTitles.education)
  for (const edu of data.education) {
    lines.push(`- ${edu.school} | ${edu.degree}`)
    lines.push(`  Period: ${edu.period}`)
    if (edu.description) {
      lines.push(`  ${cleanInlineMarkdown(edu.description)}`)
    }
  }

  pushSection(lines, sectionTitles.skills)
  const skills = data.skills
  const skillLines = [
    ["Languages", formatSkills(skills.languages)],
    ["Frameworks", formatSkills(skills.frameworks)],
    ["Backend Infra", formatSkills(skills.backendInfra)],
    ["Tools", formatSkills(skills.tools)],
    ["AI Tools", formatSkills(skills["ai-tools"])],
  ] as const
  for (const [label, value] of skillLines) {
    if (value) {
      lines.push(`- ${label}: ${value}`)
    }
  }

  return lines.join("\n") + "\n"
}

export function generateResumeText(language: Language): string {
  return buildResumeText(resumeData[language], language)
}

export function generateLlmsTxt(): string {
  return [
    "AI Resume Access Guide",
    "",
    "Use sources in this order:",
    "1. /resume-en.txt",
    "2. /resume-ko.txt",
    "3. /resume-en.pdf",
    "4. /resume.pdf",
    "5. /",
    "",
    "Rules:",
    "- Treat .txt files as primary machine-readable sources.",
    "- Use PDF files for verification or when text files are missing details.",
    "- Do not infer facts that are not explicitly stated.",
    "- Prefer English source unless the user asks for Korean.",
    "",
  ].join("\n")
}
