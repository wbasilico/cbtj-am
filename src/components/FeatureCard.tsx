import React from 'react'

export function FeatureCard({ title, children, className = '' }: { title?: string; children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        'rounded-2xl bg-[#115898] text-white p-8 h-full flex flex-col items-center justify-start text-center shadow-md',
        'transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg',
        className,
      ].join(' ')}
    >
      {title && <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>}
      <div className="text-sm sm:text-base leading-relaxed opacity-90">{children}</div>
    </div>
  )
}
