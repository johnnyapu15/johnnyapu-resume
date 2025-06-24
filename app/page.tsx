import ResumeTemplate from "@/components/resume-template"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <ResumeTemplate />
        </Suspense>
      </div>
    </main>
  )
}
