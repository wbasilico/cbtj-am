import Image from 'next/image'

/**
 * Ajuste aqui a quantidade TOTAL de logos que você tem em /public/partners
 * Ex.: brand-01.png, brand-02.png, ..., brand-24.png => TOTAL = 24
 */
const TOTAL_LOGOS = 24

/** Quantas vezes repetir a sequência para evitar "buracos" em telas ultrawide */
const REPEATS = 4

/** Divide um array em N partes (tenta equilibrar o tamanho entre as partes) */
function chunk<T>(arr: T[], parts: number): T[][] {
  const size = Math.ceil(arr.length / parts)
  return Array.from({ length: parts }, (_, i) => arr.slice(i * size, (i + 1) * size))
}

/** Gera ids 1..TOTAL_LOGOS */
const ALL_IDS = Array.from({ length: TOTAL_LOGOS }, (_, i) => i + 1)
/** Divide em 3 faixas */
const [lane1, lane2, lane3] = chunk(ALL_IDS, 3)

function Track({ ids, repeats = REPEATS }: { ids: number[]; repeats?: number }) {
  const logos = Array.from({ length: repeats }).flatMap(() => ids)
  return (
    <div className="marquee-track min-w-[300%]">
      {logos.map((n, i) => (
        <div key={`${n}-${i}`} className="logo-wrap">
          <Image
            src={`/partners/brand-${String(n).padStart(2, '0')}.png`}
            alt={`Marca ${n}`}
            width={220}
            height={80}
            /** Tamanho padronizado (menor) e proporcional */
            className="placeholder-logo w-auto h-auto max-w-[160px] max-h-[60px] object-contain mx-auto"
          />
        </div>
      ))}
    </div>
  )
}

export default function PartnersMarquee() {
  return (
    <div className="w-full select-none group">
      <div className="marquee-lane my-8 opacity-95">
        <div className="animate-marqueeL whitespace-nowrap group-hover:[animation-play-state:paused]">
          <Track ids={lane1} />
        </div>
      </div>
      <div className="marquee-lane my-8 opacity-90">
        <div className="animate-marqueeR whitespace-nowrap group-hover:[animation-play-state:paused]">
          <Track ids={lane2} />
        </div>
      </div>
      <div className="marquee-lane my-8 opacity-95">
        <div className="animate-marqueeL whitespace-nowrap group-hover:[animation-play-state:paused]">
          <Track ids={lane3} />
        </div>
      </div>
    </div>
  )
}
