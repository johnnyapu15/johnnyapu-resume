import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto-sans-kr', weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Juahn Jeong\'s Resume',
  description: 'A dynamic, printable resume built with Next.js, TypeScript, and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansKR.variable} font-sans`}>{children}</body>
    </html>
  )
}
