"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, Printer } from "lucide-react"
import { type Language, labels } from "@/types/resume"

interface PrintPreviewProps {
  language: Language
  onPrint: () => void
}

export function PrintPreview({ language, onPrint }: PrintPreviewProps) {
  const [open, setOpen] = useState(false)

  const handlePrint = () => {
    setOpen(false)
    setTimeout(() => {
      onPrint()
    }, 100)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white hover:bg-gray-50">
          <Eye className="mr-2 h-4 w-4" />
          미리보기
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>인쇄 미리보기</DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex justify-end">
          <Button onClick={handlePrint} className="bg-leather-700 hover:bg-leather-800">
            <Printer className="mr-2 h-4 w-4" />
            {labels[language].print}
          </Button>
        </div>
        <div className="mt-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <iframe src={`/print-preview?lang=${language}`} className="w-full h-[60vh]" title="Print Preview" />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            참고: 실제 인쇄 결과는 브라우저와 프린터 설정에 따라 다를 수 있습니다.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
