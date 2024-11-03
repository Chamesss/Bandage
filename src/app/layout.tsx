import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Footer from './components/footer'
import Header from './components/header'
import './globals.css'

const montserrat = localFont({
  src: './fonts/Montserrat.ttf',
  variable: '--font-montserrat',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Bondage',
  description: 'Bondage'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${montserrat.variable} antialiased`}>
        <Header />
        <div className="pt-[7.3rem]">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
