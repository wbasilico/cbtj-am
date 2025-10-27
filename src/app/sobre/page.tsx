import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Sobre o CBTJ-AM | CBTJ-AM',
  description: 'Conheça a história, a missão, a visão e os valores do CBTJ-AM.',
  openGraph: {
    title: 'Sobre o CBTJ-AM | CBTJ-AM',
    description: 'Conheça a história, a missão, a visão e os valores do CBTJ-AM.',
    type: 'article',
  },
}

export default function SobrePage() {
  return (
    <main className="bg-white text-neutral-800">
      {/* Header padrão com fundo cinza claro e título central */}
      <header className="bg-[#F1F1F1] border-b border-black/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#115898]">Sobre o CBTJ-AM</h1>
          <p className="mt-3 text-lg text-neutral-700">Quem somos, de onde viemos e o que nos move.</p>
        </div>
      </header>

      {/* Seção: Nossa História */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-left text-[#115898] mb-4">Nossa História</h2>
          <p className="mb-4">
            O <span className="highlight-red">Clube de Benefícios dos Servidores do Tribunal de Justiça do Amazonas</span> (CBTJ-AM) nasceu do propósito de <span className="highlight-red">cuidar de quem dedica 
            a vida à Justiça</span>. Mais do que um programa de vantagens, o CBTJ-AM é um movimento que <span className="highlight-red">valoriza o servidor, reconhece sua importância e oferece meios reais para 
              melhorar sua qualidade de vida</span> — dentro e fora do ambiente de trabalho.
          </p>
          <p className="mb-4">
            Idealizado por profissionais comprometidos com o bem-estar do corpo funcional do TJ-AM, o Clube surgiu da percepção de que os servidores <span className="highlight-red">merecem acesso facilitado </span> 
            a serviços essenciais de <span className="highlight-red">saúde, lazer, cultura e economia</span>, fortalecendo a integração entre colegas e o equilíbrio entre vida pessoal e profissional.
          </p>
          <p className="mb-4">
            Hoje, o CBTJ-AM conecta seus associados a uma ampla rede de <span className="highlight-red">benefícios</span> e <span className="highlight-red">parcerias exclusivas</span>: descontos em medicamentos, 
            consultas, exames, academias, plataformas digitais, instituições de ensino, marcas de renome nacional e internacional, além de suporte jurídico e ações de bem-estar pensadas especialmente para o 
            servidor público.
          </p>
          <p className="mb-4">
            <span className="highlight-red">Mais do que oferecer vantagens, o CBTJ-AM representa um compromisso com o cuidado, o reconhecimento e a valorização humana</span>.
          </p>
        </div>
      </section>

      {/* Seção: Missão, Visão e Valores */}
      <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-left text-[#115898] mb-10">Missão, Visão e Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card: Missão */}
            <article className="bg-[#115898] text-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Missão</h3>
              <p className="leading-relaxed text-left">
                Promover o bem-estar e a valorização dos servidores do Tribunal de Justiça do Amazonas, oferecendo benefícios e
                parcerias que impactem positivamente sua qualidade de vida.
              </p>
            </article>

            {/* Card: Visão */}
            <article className="bg-[#115898] text-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Visão</h3>
              <p className="leading-relaxed text-left">
                Ser reconhecido como o principal clube de benefícios para servidores públicos no Amazonas, referência em inovação,
                credibilidade e compromisso social.
              </p>
            </article>

            {/* Card: Valores */}
            <article className="bg-[#115898] text-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Valores</h3>
              <ul className="list-disc list-inside leading-relaxed space-y-2 text-left">
                <li>
                  <span className="valores-titulo">Valorização Humana:</span> Colocar o servidor no centro de todas as ações.
                </li>
                <li>
                  <span className="valores-titulo">Transparência:</span> Atuar com ética, respeito e clareza em todas as relações.
                </li>
                <li>
                  <span className="valores-titulo">Parceria:</span> Fortalecer laços com empresas e instituições que compartilham os mesmos ideais de cuidado e confiança.
                </li>
                <li>
                  <span className="valores-titulo">Inovação:</span> Buscar constantemente novas soluções que facilitem a vida dos associados.
                </li>
                <li>
                  <span className="valores-titulo">Acolhimento:</span> Oferecer um ambiente de pertencimento, apoio e reconhecimento contínuo.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Seção: Nosso Compromisso */}
      <section className="bg-[#F1F1F1] py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-left text-[#115898] mb-4">Nosso Compromisso</h2>
          <p className="leading-relaxed">
            O CBTJ-AM existe para lembrar que quem serve à Justiça também merece ser servido com dignidade, cuidado e oportunidades. Cada benefício é um gesto de valorização — 
            <span className="highlight-red"> e cada servidor, uma parte essencial da nossa história</span>.
          </p>
        </div>
      </section>
    </main>
  )
}
