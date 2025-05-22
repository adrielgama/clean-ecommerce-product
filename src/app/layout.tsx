import './globals.css'

import { Plus_Jakarta_Sans } from 'next/font/google'

import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Produto E-commerce',
  description: 'E-commerce de produtos de alta qualidade',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <TooltipProvider>
          {children}
          <Toaster richColors theme="light" />
        </TooltipProvider>
      </body>
    </html>
  )
}
