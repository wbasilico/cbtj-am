import React from 'react'
import Image from 'next/image'
import { Partner } from '@/content/partners'
import { toSlug } from '@/utils/slug'
import { links } from '@/config/site'


// As imagens de fundo devem ficar em: /public/partners-bg/brand-01.jpg ... brand-26.jpg
// O campo `p.bg` já aponta para esse caminho (configure em src/content/partners.ts).

export function PartnerCard({ p }: { p: Partner }) {
  return (
    <div
      className={[
        'group relative overflow-hidden rounded-3xl',
        // 🔷 Borda azul (~3px)
        'border-[3px] border-[#115898]',
        // Altura ajustada para equilibrar o conteúdo
        'min-h-[380px] sm:min-h-[440px]',
        // BG base + transições de hover
        'bg-neutral-100 shadow-sm transition-all duration-200 will-change-transform',
        'hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#115898]/20',
      ].join(' ')}
    >
      {/* Imagem de fundo com visibilidade reduzida (85%) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${p.bg})` }}
        aria-hidden
      />

      {/* Camada azul translúcida */}
      <div className="absolute inset-0 bg-[#115898]/10" aria-hidden />

      {/* Overlay branco → transparente (direita → esquerda) + leve blur */}
      <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/70 to-transparent backdrop-blur-[2px]" aria-hidden />

      {/* ➕ Desconto centralizado verticalmente e alinhado à esquerda */}
      <div className="absolute inset-y-0 left-0 z-10 flex items-center justify-start pl-6 sm:pl-8 pr-6">
        <div className="text-left text-[#C73633] font-extrabold tracking-tight text-3xl sm:text-4xl">
          {p.discount}
        </div>
      </div>

      {/* Conteúdo sobre a faixa branca */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        {/* Topo à direita: badge primeiro, depois o título (invertido) */}
        <div className="flex flex-col items-end text-right gap-2">
          <span className="rounded-full bg-neutral-300/95 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm border border-black/10">
            {p.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] leading-snug">
            {p.name}
          </h3>
        </div>

        {/* Rodapé: logo (menor) ocupando boa parte da largura + CTA à direita */}
        <div className="mt-8 flex flex-col items-end gap-3">
          {/* Logo um pouco menor para melhor proporção visual */}
          <div className="relative w-3/4 h-8 sm:h-10 md:h-12">
            <Image src={p.logo} alt={p.name} fill className="object-contain object-right" />
          </div>
          <a
            href={links.parceiros.solicitar(p.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-6 py-2 sm:px-8 sm:py-3 border border-white"
          >
            Solicitar
          </a>
        </div>
      </div>
    </div>
  )
}
