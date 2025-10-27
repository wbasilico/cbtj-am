import React from 'react'

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="bg-[#F1F1F1] border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#115898]">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-neutral-700">{subtitle}</p>}
      </div>
    </header>
  )
}
