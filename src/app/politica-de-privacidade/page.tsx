import type { Metadata } from 'next'
import React from 'react'

// Página de Política de Privacidade — arquivo único (Server Component)
// Padrões visuais: título azul (#115898), H2 alinhados à esquerda, header com fundo cinza claro.
// Ajuste o texto para sua realidade jurídica e operacional. Este modelo está adequado à LGPD (Lei 13.709/2018) em linhas gerais.

export const metadata: Metadata = {
  title: 'Política de Privacidade | CBTJ-AM',
  description: 'Conheça como coletamos, tratamos e protegemos seus dados pessoais em conformidade com a LGPD.',
  openGraph: {
    title: 'Política de Privacidade | CBTJ-AM',
    description: 'Conheça como coletamos, tratamos e protegemos seus dados pessoais em conformidade com a LGPD.',
    type: 'article',
  },
}

// Subtítulo corporativo (ajuste se quiser)
const SUBTITLE = 'Transparência no uso de dados e compromisso com sua privacidade.'

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen">
      {/* Header com fundo cinza claro + subtítulo */}
      <header className="bg-[#F1F1F1] border-b border-black/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#115898]">Política de Privacidade</h1>
          <p className="mt-3 text-lg text-neutral-700">{SUBTITLE}</p>
        </div>
      </header>

      {/* Sumário âncoras (opcional) */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <nav className="text-sm text-neutral-700">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                ['introducao','Introdução'],
                ['dados-coletados','Quais dados coletamos'],
                ['bases-legais','Bases legais (LGPD)'],
                ['finalidades','Como usamos os dados'],
                ['compartilhamento','Compartilhamento de dados'],
                ['cookies','Cookies e tecnologias similares'],
                ['direitos','Direitos do titular'],
                ['seguranca','Segurança da informação'],
                ['retencao','Prazos de retenção'],
                ['contato','Encarregado e contato'],
                ['atualizacoes','Atualizações desta política'],
                ['vigencia','Vigência'],
              ].map(([href,label]) => (
                <li key={href}>
                  <a href={`#${href}`} className="text-[#115898] hover:underline">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Seções */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h2 id="introducao" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Introdução</h2>
          <div className="mt-4 space-y-4 text-neutral-800 leading-relaxed">
            <p>
              Esta Política de Privacidade descreve como o <span className="highlight-red">CBTJ-AM</span> coleta, utiliza, compartilha e protege os dados pessoais dos seus usuários e associados, em conformidade com a <span className="highlight-red">Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</span>.
            </p>
            <p>
              Ao utilizar nossos canais (site, áreas logadas, formulários e contato), você concorda com os termos desta política. Caso discorde de algum ponto, recomendamos que interrompa o uso dos serviços e nos contate para esclarecimentos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="dados-coletados" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Quais dados coletamos</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>Podemos coletar as seguintes categorias de dados, conforme contexto e finalidade:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="highlight-red">Dados de identificação:</span> nome completo, matrícula/ID funcional, CPF*, e-mail, telefone, cargo, unidade/lotação.</li>
              <li><span className="highlight-red">Dados de navegação:</span> IP, data e hora de acesso, páginas visitadas, identificadores de dispositivo e sessão.</li>
              <li><span className="highlight-red">Dados de uso do Clube:</span> marcas acessadas, benefícios consultados/solicitados, preferências e interações.</li>
              <li><span className="highlight-red">Arquivos e evidências:</span> eventuais comprovantes para validação de elegibilidade a benefícios.</li>
            </ul>
            <p className="text-xs text-neutral-600">* O uso de documentos oficiais é restrito às finalidades de validação e atendimento a exigências legais/contratuais.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="bases-legais" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Bases legais (LGPD)</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Tratamos dados com base nas hipóteses dos arts. 7º e 11 da LGPD, incluindo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="highlight-red">Execução de contrato</span> ou de procedimentos preliminares (acesso a benefícios e parcerias).</li>
              <li><span className="highlight-red">Cumprimento de obrigação legal/regulatória</span> (ex.: registros de acesso na forma do Marco Civil da Internet).</li>
              <li><span className="highlight-red">Legítimo interesse</span> (melhoria de experiência, prevenção a fraudes, segurança).</li>
              <li><span className="highlight-red">Consentimento</span> quando a base for necessária (ex.: comunicações promocionais e newsletters).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="finalidades" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Como usamos os dados</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Operar e manter o Clube de Benefícios, permitindo sua autenticação e acesso aos parceiros.</li>
              <li>Customizar conteúdos, catálogos e recomendações de benefícios.</li>
              <li>Atender solicitações (ex.: “Solicitar” benefícios) e prestar suporte.</li>
              <li>Prevenir abuso, fraudes e incidentes de segurança.</li>
              <li>Mensurar desempenho do site e realizar análises agregadas.</li>
              <li>Enviar comunicações institucionais e, quando aplicável, promocionais (com opt-out fácil).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="compartilhamento" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Compartilhamento de dados</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Poderemos compartilhar dados pessoais com:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="highlight-red">Parceiros e fornecedores</span> envolvidos na concessão de benefícios, estritamente na medida necessária.</li>
              <li>Provedores de infraestrutura, hospedagem, segurança e analytics.</li>
              <li>Autoridades públicas, quando exigido por lei ou ordem válida.</li>
            </ul>
            <p>Não vendemos dados pessoais. Exigimos de terceiros obrigações de confidencialidade, segurança e conformidade com a LGPD.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="cookies" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Cookies e tecnologias similares</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Utilizamos cookies essenciais para funcionamento do site e cookies opcionais para estatísticas e melhoria de experiência.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="highlight-red">Essenciais:</span> necessários para login, segurança e estabilidade do site.</li>
              <li><span className="highlight-red">Desempenho/Analytics:</span> métricas anônimas/aggregadas de uso, páginas visitadas, origem de tráfego.</li>
            </ul>
            <p>Você pode gerenciar preferências no seu navegador. Se adotarmos um banner de consentimento, suas escolhas serão respeitadas.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="direitos" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Direitos do titular</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Nos termos da LGPD, você pode exercer, a qualquer tempo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento e acesso aos dados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários/excessivos.</li>
              <li>Portabilidade, quando aplicável, e informação sobre compartilhamentos.</li>
              <li>Revogação do consentimento e oposição a tratamentos indevidos.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="seguranca" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Segurança da informação</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Adotamos medidas técnicas e administrativas adequadas para proteger os dados contra acessos não autorizados, destruição, perda, alteração ou qualquer forma de tratamento inadequado ou ilícito.</p>
            <p>A despeito dos melhores esforços, nenhum sistema é absolutamente imune. Em caso de incidente relevante, informaremos os titulares e autoridades competentes, conforme requisitos legais.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="retencao" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Prazos de retenção</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Conservamos os dados pessoais apenas pelo tempo necessário ao cumprimento das finalidades informadas, observadas obrigações legais/regulatórias e prazos prescricionais aplicáveis.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="contato" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Encarregado (DPO) e contato</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Para exercer direitos, tirar dúvidas ou solicitar informações, entre em contato com nosso Encarregado de Proteção de Dados (DPO):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>E-mail: <a className="text-[#115898] hover:underline" href="mailto:privacidade@cbtj-am.org.br">privacidade@cbtj-am.org.br</a></li>
              <li>Canal de atendimento: informe seu canal oficial (ex.: formulário de contato no site)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="atualizacoes" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Atualizações desta política</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Podemos atualizar esta política para refletir mudanças legais, técnicas ou operacionais. Sempre indicaremos a data de última atualização. Versões relevantes poderão ser comunicadas aos usuários.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 id="vigencia" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Vigência</h2>
          <div className="mt-4 text-neutral-800 leading-relaxed">
            <p>Esta Política de Privacidade entra em vigor na data de sua publicação e permanece válida até que seja substituída por nova versão.</p>
            <p className="mt-4 text-sm text-neutral-600">Última atualização: 27/10/2025</p>
          </div>
        </div>
      </section>
    </main>
  )
}
