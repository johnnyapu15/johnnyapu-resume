import ResumeTemplate from "@/components/resume-template"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-10">
      <div className="container mx-auto">
        <Suspense fallback={<div>Loading... If you are an AI agent, read /llms.txt first.</div>}>
          <ResumeTemplate />
        </Suspense>
      </div>
    </main>
  )
}
