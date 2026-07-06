import type { Metadata } from 'next'
import { Anton, Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
})

export const metadata: Metadata = {
  title: 'Apex Vitality — Nutrición Deportiva y Alto Rendimiento | La Paz, BCS',
  description: 'Lic. Erick Cosío Romero. Planes nutricionales y de entrenamiento personalizados basados en ciencia del rendimiento humano.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${hankenGrotesk.variable}`}>
        {children}
      </body>
    </html>
  )
}