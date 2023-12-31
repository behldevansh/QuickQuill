import './globals.css'
import type { Metadata } from 'next'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuickQuill',
  description: 'Developed by behldevansh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5F6F8]'>{children}</body>
    </html>
  )
}
