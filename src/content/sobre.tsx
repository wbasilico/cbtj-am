import React from 'react'

export default function SobrePage() {
  return (
    <main className="bg-[#FFFFFF] text-neutral-800">
      {/* Seção: Nossa História */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#115898] text-center mb-8">
          Sobre o CBTJ-AM
        </h1>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-left text-[#115898] mb-4">Nossa História</h2>
          <p className="mb-4">
            O Clube de Benefícios dos Servidores do Tribunal de Justiça do Estado do Amazonas (CBTJ-AM) nasceu com a missão de
            oferecer aos servidores uma rede de vantagens e oportunidades que valorizem sua dedicação e contribuição à Justiça.
          </p>
          <p className="mb-4">
            Ao longo dos anos, o CBTJ-AM consolidou parcerias estratégicas com empresas de diversos segmentos, criando uma
            plataforma de benefícios que une economia, bem-estar e qualidade de vida.
          </p>
          <p className="mb-4">
            Com foco na transparência, ética e inovação, o Clube se mantém comprometido em promover experiências e soluções que
            gerem impacto positivo para seus associados e suas famílias.
          </p>
        </div>
      </section>

      {/* Seção: Missão, Visão e Valores */}
      <section className="bg-[#FFFFFF] py-16 px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card Missão */}
          <div className="bg-[#115898] text-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Missão</h3>
            <p className="text-justify">
              Promover o bem-estar e a valorização dos servidores do Tribunal de Justiça do Amazonas, oferecendo benefícios e
              parcerias que impactem positivamente sua qualidade de vida.
            </p>
          </div>

          {/* Card Visão */}
          <div className="bg-[#115898] text-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Visão</h3>
            <p className="text-justify">
              Ser reconhecido como o principal clube de benefícios para servidores públicos no Amazonas, referência em inovação,
              credibilidade e compromisso social.
            </p>
          </div>

          {/* Card Valores */}
          <div className="bg-[#115898] text-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Valores</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="valores-titulo">Valorização Humana:</span> Colocar o servidor no centro de todas as ações.</li>
              <li><span className="valores-titulo">Transparência:</span> Atuar com ética, respeito e clareza em todas as relações.</li>
              <li><span className="valores-titulo">Parceria:</span> Fortalecer laços com empresas e instituições que compartilham os mesmos ideais de cuidado e confiança.</li>
              <li><span className="valores-titulo">Inovação:</span> Buscar constantemente novas soluções que facilitem a vida dos associados.</li>
              <li><span className="valores-titulo">Acolhimento:</span> Oferecer um ambiente de pertencimento, apoio e reconhecimento contínuo.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção: Nosso Compromisso */}
      <section className="bg-[#F1F1F1] py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-left text-[#115898] mb-4">Nosso Compromisso</h2>
          <p>
            O CBTJ-AM existe para lembrar que quem serve à Justiça também merece ser servido com dignidade, cuidado e oportunidades.
            Cada benefício é um gesto de valorização — e cada servidor, uma parte essencial da nossa história.
          </p>
        </div>
      </section>
    </main>
  )
}
