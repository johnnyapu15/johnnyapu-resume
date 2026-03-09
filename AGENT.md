# Agent Notes

## PDF-first verification

- This resume is primarily submitted as a PDF, not just viewed in the browser.
- Do not rely on normal browser layout alone when reviewing print results.
- Use `npm run pdf:check` to verify the actual print-oriented output.
- The command builds the app, starts a local production server, and exports:
  - `artifacts/print/resume-summary.pdf`
  - `artifacts/print/resume-detail.pdf`

## Editing guidance

- When reviewing layout changes, check the exported PDFs before concluding the print result is correct.
- Prefer PDF-first decisions over screen-only decisions for spacing, pagination, and density.
