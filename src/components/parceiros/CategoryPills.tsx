import React from 'react'

export function CategoryPills({ items, value, onChange }: { items: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={[
            'px-3 py-2 rounded-full text-sm border transition-colors',
            value === item ? 'bg-[#115898] text-white border-[#115898]' : 'bg-white text-neutral-800 border-black/10 hover:bg-neutral-50',
          ].join(' ')}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
