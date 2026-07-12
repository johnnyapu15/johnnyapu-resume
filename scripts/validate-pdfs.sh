#!/usr/bin/env sh
set -eu

PDF_DIR="${RESUME_PDF_DIR:-artifacts/print}"
EXPECTED_PAGES="${RESUME_EXPECTED_PAGES:-2}"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

validate_pdf() {
  pdf_path="$1"
  shift

  if [ ! -s "${pdf_path}" ]; then
    echo "Missing or empty PDF: ${pdf_path}" >&2
    exit 1
  fi

  pages=$(pdfinfo "${pdf_path}" | awk '/^Pages:/ { print $2 }')
  if [ "${pages}" != "${EXPECTED_PAGES}" ]; then
    echo "Unexpected page count for ${pdf_path}: expected ${EXPECTED_PAGES}, got ${pages:-unknown}" >&2
    exit 1
  fi

  extracted=$(mktemp)
  pdftotext -layout "${pdf_path}" "${extracted}"

  for marker in "$@"; do
    if ! grep -Fq "${marker}" "${extracted}"; then
      echo "Missing text marker in ${pdf_path}: ${marker}" >&2
      rm -f "${extracted}"
      exit 1
    fi
  done

  page=1
  while [ "${page}" -le "${EXPECTED_PAGES}" ]; do
    page_text=$(pdftotext -f "${page}" -l "${page}" "${pdf_path}" - | tr -d '[:space:]')
    if [ -z "${page_text}" ]; then
      echo "Blank page ${page} in ${pdf_path}" >&2
      rm -f "${extracted}"
      exit 1
    fi
    page=$((page + 1))
  done

  rm -f "${extracted}"
  echo "Validated ${pdf_path}: ${pages} pages"
}

require_command pdfinfo
require_command pdftotext

validate_pdf \
  "${PDF_DIR}/resume-summary.pdf" \
  "경력 사항" "주요 경험"
validate_pdf \
  "${PDF_DIR}/resume-summary-en.pdf" \
  "Experience" "Key Experience"
