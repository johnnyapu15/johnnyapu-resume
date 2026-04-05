#!/usr/bin/env sh
set -eu

PORT="${RESUME_PORT:-}"

if [ -z "${PORT}" ]; then
  PORT=$(node -e 'const net = require("net"); const server = net.createServer(); server.listen(0, "127.0.0.1", () => { console.log(server.address().port); server.close(); });')
fi

BASE_URL="http://127.0.0.1:${PORT}"

npm run build
npm run start -- --hostname 127.0.0.1 --port "${PORT}" > /tmp/johnnyapu-resume-pdf.log 2>&1 &
SERVER_PID=$!

cleanup() {
  kill "${SERVER_PID}" 2>/dev/null || true
}

trap cleanup EXIT INT TERM

node -e '
const http = require("http")
const baseUrl = process.argv[1]
let retries = 0

function probe() {
  http.get(baseUrl, res => {
    if (res.statusCode >= 200 && res.statusCode < 500) {
      console.log(`Server ready: ${res.statusCode}`)
      process.exit(0)
    }
    retry()
  }).on("error", retry)
}

function retry() {
  retries += 1
  if (retries > 50) {
    console.error("Server did not become ready in time")
    process.exit(1)
  }
  setTimeout(probe, 200)
}

probe()
' "${BASE_URL}"

RESUME_BASE_URL="${BASE_URL}" npm run pdf:export

# Copy PDFs to public/ for download button
cp artifacts/print/resume-summary.pdf public/resume.pdf 2>/dev/null || true
cp artifacts/print/resume-summary-en.pdf public/resume-en.pdf 2>/dev/null || true

echo "PDF check complete. See artifacts/print/"
