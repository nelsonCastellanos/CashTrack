import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from "@/app/ThemeRegistry";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cash track, agrega tus finanzas!',
  description: 'Generated by create next app OKS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
