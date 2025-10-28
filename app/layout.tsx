import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Equations',
  description: 'Smart knowledge and discussion hub built in India.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
