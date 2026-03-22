# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bilingual (KO/EN) resume web application with PDF-first output. Next.js 15 + TypeScript + Tailwind CSS, deployed on Vercel.

Two view modes: **Summary** (Problem/Approach/Result) and **Detail** (`?isDetail=true`, STAR format). Language toggle switches between Korean and English.

## Commands

```bash
pnpm dev              # Dev server
pnpm build            # Production build
pnpm lint             # ESLint
pnpm pdf:check        # Build → serve → export PDFs to artifacts/print/
pnpm pdf:preview      # pdf:check + convert each page to PNG (150 DPI)
```

`pdf:preview` outputs `artifacts/print/resume-summary-{N}.png` and `resume-detail-{N}.png`. Always verify layout changes with the rendered PNGs — do not guess from code alone.

## Architecture

- **`data/resume-data.ts`** — All resume content. `MultiLanguageResumeData` with `ko` and `en` sections. This is the primary file to edit for content changes.
- **`types/resume.ts`** — TypeScript interfaces (`ResumeData`, `KeyExperience`, `Skills`, etc.) and bilingual `labels`.
- **`components/resume-template.tsx`** — Main render component. Handles both Summary and Detail views, print layout, language toggle.
- **`app/globals.css`** — Print CSS (~270 lines of `@media print` rules). A4 page setup, 9pt font, color preservation, page break control.
- **`scripts/export-pdf.js`** — Playwright-based PDF export (headless Chromium).

## Resume Content Editing Rules

See `.resume-editing-rules.md` for full details. Key points:

- **Bilingual sync**: Always update both `ko` and `en` together. Never change one without the other.
- **Consistency**: Same facts (numbers, periods, labels) must match across `summary`, `experience`, `keyExperience`, and `detail` sections.
- **Rendering**: Only `**bold**` markdown is supported. Lines starting with `"  "` (2 spaces) render as indented sub-bullets. `summary` strings are `.join(" ")` into one `<p>`.
- **Quality**: Lead with results, not process. Include quantitative metrics. No empty claims without data.

## Print Layout

- A4 (210mm × 297mm), margins 0.7cm × 0.45cm
- Base font 9pt (English 8.5pt)
- `.print-avoid-break` prevents mid-element page splits
- `.print-page-break-before` forces new page
- Empty arrays (`projects: []`, `certifications: []`, `activities: []`) don't render — leave them as-is

## Package Manager

**pnpm**. Ignore stray `yarn.lock` in parent directory.
