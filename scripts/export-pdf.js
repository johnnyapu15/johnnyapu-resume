const fs = require("fs")
const path = require("path")
const { chromium } = require("playwright")

const baseUrl = process.env.RESUME_BASE_URL || "http://127.0.0.1:3001"
const outputDir = path.resolve(process.env.RESUME_PDF_DIR || "artifacts/print")

async function exportPdf(page, targetPath, route) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" })
  await page.waitForSelector("#resume-content", { state: "visible" })
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
    await exportPdf(page, path.join(outputDir, "resume-summary.pdf"), "/")
    await exportPdf(page, path.join(outputDir, "resume-summary-en.pdf"), "/?lang=en")
    console.log(`Exported PDFs to ${outputDir}`)
  } finally {
    await browser.close()
  }
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
