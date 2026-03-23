import type { Metadata } from 'next'
import './globals.css'

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
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
