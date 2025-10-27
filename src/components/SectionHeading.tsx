import React from 'react'

export function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={['text-2xl sm:text-3xl font-extrabold tracking-tight', 'text-[#115898] text-left', className].join(' ')}>
      {children}
    </h2>
  )
}
