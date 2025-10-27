import type { Metadata } from 'next'
import React from 'react'
import { PageHeader } from '@/components/parceiros/PageHeader'
import { PARTNERS, CATEGORIES, SUBTITLE } from '@/content/partners'
import ParceirosClient from './ParceirosClient'

export const metadata: Metadata = {
  title: 'Parceiros | CBTJ-AM',
  description: 'Descontos e vantagens exclusivos para servidores do TJ-AM em marcas parceiras.',
  openGraph: { title: 'Parceiros | CBTJ-AM', description: 'Marcas parceiras e seus benefícios.', type: 'website' },
}

export default function ParceirosPage() {
  return (
    <main className="min-h-screen">
      <PageHeader title="Parceiros" subtitle={SUBTITLE} />
      <ParceirosClient data={PARTNERS} categories={CATEGORIES} />
    </main>
  )
}
