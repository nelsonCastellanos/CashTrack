import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({ subsets: ['latin']  })

export const metadata: Metadata = {
  title: 'Cash track, agrega tus finanzas!',
  description: 'Manage your finances with Cash Track',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark bg-black text-white" >
      <body className={`${inter.className} container`}>
      {children}
      </body>
    </html>
  )
}
