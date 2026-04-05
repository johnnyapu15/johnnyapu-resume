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
  const enText = generateResumeText("en").trimEnd()
  const koText = generateResumeText("ko").trimEnd()

  return [
    "AI Resume Access Guide",
    "",
    "Quick index for partial readers:",
    "- English full text block: [EN_RESUME_START] ... [EN_RESUME_END]",
    "- Korean full text block: [KO_RESUME_START] ... [KO_RESUME_END]",
    "- English sections (inside EN block): Summary / Experience / Key Experience / Education / Skills",
    "- Korean sections (inside KO block): 요약 / 경력 / 주요 경험 / 학력 / 기술",
    "- Contact lines are at the top of each block (Name, Position, Email).",
    "",
    "Resume sources:",
    "- https://resume-juahn.vercel.app/resume-en.pdf (English)",
    "- https://resume-juahn.vercel.app/resume.pdf (Korean)",
    "",
    "English Resume Text (Dynamic):",
    "[EN_RESUME_START]",
    enText,
    "[EN_RESUME_END]",
    "",
    "Korean Resume Text (Dynamic):",
    "[KO_RESUME_START]",
    koText,
    "[KO_RESUME_END]",
    "",
  ].join("\n")
}
