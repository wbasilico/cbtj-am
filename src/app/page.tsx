import Hero from '@/components/Hero'
import PartnersMarquee from '@/components/PartnersMarquee'
import Link from 'next/link'
import Image from 'next/image'
import { links } from '@/config/site'


export default function Home(){
  return (
    <main>
      <Hero />

      
{/* O que é o Clube? (Light Gray) */}
<section className="bg-cbtj-light py-16">
  <div className="mx-auto max-w-7xl px-4">
    <h2 className="section-title text-3xl md:text-4xl">O que é o Clube?</h2>
    <p className="section-subtitle">Conheça nossa proposta e como você se beneficia.</p>
    <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="text-cbtj-dark leading-relaxed text-justify space-y-6">
        <p>
          O <span className="highlight-red">CBTJ-AM</span> é um clube de benefícios voltado exclusivamente para os <span className="highlight-red">servidores do Tribunal de Justiça do Amazonas</span>.
        </p>
        <p>
          Seu propósito é <span className="highlight-red">promover bem-estar, valorização e qualidade de vida</span>, oferecendo uma ampla rede de vantagens e parcerias: descontos em <span className="highlight-red"> 
          medicamentos, consultas, exames, academias, educação, lazer e grandes marcas do mercado nacional e internacional</span>.
        </p>
        <p>
          Mais do que benefícios, o CBTJ-AM <span className="highlight-red">é um espaço de cuidado e reconhecimento </span>para quem dedica sua trajetória à Justiça.
        </p>
      </div>
      <div className="flex justify-center">
            <Image
              src="/o-que-e.png"
              alt="Servidores do TJ-AM reunidos no escritório do CBTJ-AM"
              width={600}
              height={400}
              className="rounded-2xl shadow-md object-cover w-full max-w-[600px] h-auto"
              priority
            />
      </div>
    </div>
  </div>
</section>

      {/* Benefícios (White) */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-title text-3xl md:text-4xl">Benefícios</h2>
          <p className="section-subtitle">Vantagens exclusivas para servidores do TJ-AM.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
  {/* Card 1 */}
  <div className="rounded-2xl bg-cbtj-blue p-10 md:p-12 text-white text-center min-h-48 flex flex-col justify-start transition-all duration-300 hover:bg-cbtj-red hover:-translate-y-2 hover:shadow-lg">
    <h3 className="mb-3 text-2xl font-extrabold">Descontos em Consultas e Exames</h3>
    <p className="font-medium opacity-95 text-lg">
      Cuide da sua saúde com praticidade e economia.
      Aproveite condições especiais em consultas médicas, exames laboratoriais e de imagem, com uma ampla rede de parceiros à sua disposição.
    </p>
  </div>

  {/* Card 2 */}
  <div className="rounded-2xl bg-cbtj-blue p-10 md:p-12 text-white text-center min-h-48 flex flex-col justify-start transition-all duration-300 hover:bg-cbtj-red hover:-translate-y-2 hover:shadow-lg">
    <h3 className="mb-3 text-2xl font-extrabold">Descontos em Medicamentos</h3>
    <p className="font-medium opacity-95 text-lg">
      Mais saúde por menos.
      Tenha acesso a descontos exclusivos em medicamentos nas principais redes de farmácias, garantindo economia e bem-estar para o seu dia a dia.
    </p>
  </div>

  {/* Card 3 */}
  <div className="rounded-2xl bg-cbtj-blue p-10 md:p-12 text-white text-center min-h-48 flex flex-col justify-start transition-all duration-300 hover:bg-cbtj-red hover:-translate-y-2 hover:shadow-lg">
    <h3 className="mb-3 text-2xl font-extrabold">Suporte Jurídico</h3>
    <p className="font-medium opacity-95 text-lg">
      A tranquilidade de contar com quem entende.
      Receba orientação jurídica especializada sempre que precisar, com suporte confiável para lidar com questões legais com segurança e confiança.
    </p>
  </div>
</div>

        </div>
      </section>

      {/* Parcerias de Sucesso (Light Gray) */}
      <section className="bg-cbtj-light py-16">
        <div className="mx-auto max-w-none px-0">
          <h2 className="section-title text-3xl md:text-4xl">Parcerias de Sucesso</h2>
          <p className="section-subtitle">Marcas que você confia, vantagens que fazem a diferença no seu dia a dia.</p>
          <div className="mt-10">
            <PartnersMarquee />
          </div>
          <div className="mt-10 mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              <span className="hidden md:block" />
              <Link href="/parceiros" className="btn w-full">Quero Aproveitar as Ofertas</Link>
              <span className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Fale Conosco (White) */}
      <section id="fale-conosco" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-title text-3xl md:text-4xl">Fale Conosco</h2>
          <p className="section-subtitle">Tem uma dúvida ou precisa de ajuda? Fale com a gente agora mesmo pelo WhatsApp.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <a className="btn w-full" href={links.contato.segundaVia} target="_blank" rel="noopener noreferrer">2ª Via de Boleto</a>
            <a className="btn-outline-red w-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg" href={links.contato.comercial} target="_blank" rel="noopener noreferrer">Comercial</a>
            <a className="btn-outline-red w-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg" href={links.contato.ouvidoria} target="_blank" rel="noopener noreferrer">Ouvidoria</a>
          </div>
        </div>
      </section>
    </main>
  )
}
