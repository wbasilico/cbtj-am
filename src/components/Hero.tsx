import Image from 'next/image'

export default function Hero(){
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full">
      {/* Background image */}
      <Image src="/hero.jpg" alt="CBTJ-AM" fill priority className="object-cover" />
      {/* Gradient overlay 0% -> 70% gray top to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      {/* Content */}
      <div className="absolute inset-x-0 top-[60%] z-10 flex w-full justify-center text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-3 text-4xl font-extrabold text-white md:text-6xl">Bem-vindo ao Clube de Benefícios do TJ-AM</h1>
          <p className="text-lg text-white mt-4 max-w-4xl mx-auto font-semibold">Valorização, cuidado e mais qualidade de vida para quem serve à Justiça.</p>
        </div>
      </div>
    </section>
  )
}
