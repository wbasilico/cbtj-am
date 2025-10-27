'use client'

import React, { useMemo, useState } from 'react'
import { CategoryPills } from '@/components/parceiros/CategoryPills'
import { SearchBar } from '@/components/parceiros/SearchBar'
import { PartnerCard } from '@/components/parceiros/PartnerCard'
import type { Partner, Category } from '@/content/partners'

function usePartnerFilter(data: Partner[], baseCategories: readonly Category[] | string[]) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<string>('Todos')

  const categories = useMemo(() => ['Todos', ...baseCategories], [baseCategories])

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase()
    return data.filter((p) => {
      const matchText = !text || `${p.name} ${p.discount} ${p.category}`.toLowerCase().includes(text)
      const matchCat = cat === 'Todos' || p.category === cat
      return matchText && matchCat
    })
  }, [data, q, cat])

  return { q, setQ, cat, setCat, categories, filtered }
}

export default function ParceirosClient({
  data,
  categories: baseCategories,
}: {
  data: Partner[]
  categories: readonly Category[]
}) {
  const { q, setQ, cat, setCat, categories, filtered } = usePartnerFilter(data, baseCategories)

  return (
    <>
      {/* Busca + filtros (filtros abaixo, com rolagem horizontal) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="mb-3">
            <SearchBar value={q} onChange={setQ} />
          </div>
          <div className="-mx-4 px-4 overflow-x-auto whitespace-nowrap">
            <CategoryPills items={categories as string[]} value={cat} onChange={setCat} />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-black/10 p-8 text-center text-neutral-600">
              Nenhum parceiro encontrado. Ajuste os filtros ou tente outra busca.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <PartnerCard key={p.name} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
