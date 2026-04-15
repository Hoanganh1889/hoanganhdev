import { Space_Mono, Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata = {
  title: 'Hoàng Anh | Full-stack Developer',
  description: 'Personal portfolio of Nguyễn Hoàng Anh ',
  openGraph: {
    title: 'Hoàng Anh | Full-stack Developer',
    description: 'Personal portfolio of Nguyễn Hoàng Anh',
    url: 'https://hoanganhdev.id.vn',
    siteName: 'hoanganhdev.id.vn',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${syne.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}