const fs = require("fs")
const path = require("path")
const { chromium } = require("playwright")

const baseUrl = process.env.RESUME_BASE_URL || "http://127.0.0.1:3001"
const outputDir = path.resolve(process.env.RESUME_PDF_DIR || "artifacts/print")

async function exportPdf(page, targetPath, route, { language, track }) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" })
  await page.waitForSelector(
    `#resume-content[data-resume-language="${language}"][data-resume-track="${track}"]`,
    { state: "visible" },
  )
  await page.waitForTimeout(300)
  await page.emulateMedia({ media: "print" })
  await page.pdf({
    path: targetPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "0mm",
      right: "0mm",
      bottom: "0mm",
      left: "0mm",
    },
  })
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  try {
    await exportPdf(page, path.join(outputDir, "resume-summary.pdf"), "/", {
      language: "ko",
      track: "platform",
    })
    await exportPdf(
      page,
      path.join(outputDir, "resume-ai-backend.pdf"),
      "/?track=ai-backend",
      { language: "ko", track: "ai-backend" },
    )
    await exportPdf(page, path.join(outputDir, "resume-summary-en.pdf"), "/?lang=en", {
      language: "en",
      track: "platform",
    })
    console.log(`Exported PDFs to ${outputDir}`)
  } finally {
    await browser.close()
  }
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
