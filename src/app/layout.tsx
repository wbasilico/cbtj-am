import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: 'CBTJ-AM | Clube de Benefícios do TJ-AM',
  description: 'Clube de Benefícios do Tribunal de Justiça do Amazonas',
  icons: {
    icon: '/favicon.ico',
  },
}

import CookieBanner from '@/components/CookieBanner'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        <div className="header-spacer" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
