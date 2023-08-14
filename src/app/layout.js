import './globals.css'
// import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MAD',
  description: 'Mariano Alvarez Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
