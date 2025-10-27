import React from 'react'

export function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busque por marca ou benefício..."
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#115898]/30"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">⌕</span>
    </div>
  )
}
