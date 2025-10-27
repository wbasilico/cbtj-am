import type { Metadata } from 'next'
import React from 'react'

// Página de Termos de Uso — arquivo único (Server Component)
// Padrões visuais: título azul (#115898), H2 alinhados à esquerda, header com fundo cinza claro.
// Destaques legais devem usar a classe utilitária `.highlight-red` (defina no seu CSS global se ainda não existir).

export const metadata: Metadata = {
  title: 'Termos de Uso | CBTJ-AM',
  description: 'Condições para uso do site e acesso aos benefícios e parcerias do CBTJ-AM.',
  openGraph: {
    title: 'Termos de Uso | CBTJ-AM',
    description: 'Condições para uso do site e acesso aos benefícios e parcerias do CBTJ-AM.',
    type: 'article',
  },
}

const SUBTITLE = 'Condições de uso do site, responsabilidades e limites aplicáveis.'

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#F1F1F1] border-b border-black/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#115898]">Termos de Uso</h1>
          <p className="mt-3 text-lg text-neutral-700">{SUBTITLE}</p>
        </div>
      </header>

      {/* Sumário âncoras */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <nav className="text-sm text-neutral-700">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                ['aceitacao','Aceitação dos Termos'],
                ['elegibilidade','Elegibilidade e Cadastro'],
                ['servico','Descrição do Serviço'],
                ['conta','Conta, Acesso e Segurança'],
                ['conduta','Regras de Uso e Conduta'],
                ['parceiros','Ofertas de Parceiros'],
                ['precos','Alterações de Preços e Conteúdo'],
                ['propriedade','Propriedade Intelectual'],
                ['comunicacoes','Comunicações e Opt-out'],
                ['rescisao','Suspensão e Rescisão'],
                ['responsabilidade','Limitação de Responsabilidade'],
                ['indenizacao','Indenização'],
                ['lei-foro','Lei Aplicável e Foro'],
                ['contato','Contato'],
                ['atualizacoes','Atualizações destes Termos'],
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
          <h2 id="aceitacao" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Aceitação dos Termos</h2>
          <div className="mt-4 space-y-4 text-neutral-800 leading-relaxed">
            <p>
              Ao acessar ou utilizar o site do <span className="highlight-red">CBTJ-AM</span>, você declara ter lido, compreendido e aceito integralmente estes Termos de Uso. Se não concordar com alguma condição, deverá interromper o uso do serviço.
            </p>
            <p>
              Estes Termos regem o uso do portal, áreas logadas e demais recursos disponibilizados, sem prejuízo de políticas ou avisos específicos aplicáveis a funcionalidades determinadas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="elegibilidade" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Elegibilidade e Cadastro</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>O uso do Clube é destinado a <span className="highlight-red">servidores do Tribunal de Justiça do Amazonas</span> e públicos autorizados. Para acessar determinados recursos, pode ser necessário criar uma conta com dados verídicos e atualizados.</p>
            <p>Você é responsável por manter a confidencialidade das credenciais e por todas as atividades realizadas sob sua conta.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="servico" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Descrição do Serviço</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>O CBTJ-AM conecta seus usuários a <span className="highlight-red">benefícios, descontos e parcerias</span> com marcas selecionadas. As ofertas podem exigir comprovação de elegibilidade e/ou uso de códigos específicos.</p>
            <p>Nos reservamos o direito de modificar, suspender ou descontinuar funcionalidades a qualquer tempo, com ou sem aviso prévio, respeitadas as normas aplicáveis.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="conta" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Conta, Acesso e Segurança</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Não compartilhe suas credenciais. <span className="highlight-red">Você é responsável</span> pela guarda e uso adequado da conta.</li>
              <li>Informe imediatamente qualquer suspeita de uso indevido, perda ou acesso não autorizado.</li>
              <li>Podemos adotar medidas de segurança, inclusive bloqueio temporário ou redefinição de acesso.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="conduta" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Regras de Uso e Conduta</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>É vedado usar o site para finalidades ilícitas, violação de direitos de terceiros ou exploração indevida de benefícios.</li>
              <li>É proibida a engenharia reversa, scraping massivo ou sobrecarga da infraestrutura.</li>
              <li>Conteúdos e materiais só podem ser utilizados conforme autorização expressa.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="parceiros" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Ofertas de Parceiros</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>As ofertas são disponibilizadas por <span className="highlight-red">terceiros parceiros</span> e podem estar sujeitas a regras próprias (ex.: prazos, estoques, condições comerciais). O CBTJ-AM atua como facilitador de acesso, não como fornecedor final.</p>
            <p>Em caso de dúvidas ou problemas com uma oferta específica, orientamos contatar diretamente o parceiro responsável.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="precos" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Alterações de Preços e Conteúdo</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>Descontos, valores e condições podem ser alterados sem aviso prévio pelos parceiros. Empregamos esforços razoáveis para manter as informações atualizadas, sem garantias de disponibilidade contínua.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="propriedade" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Propriedade Intelectual</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>Todo o conteúdo do portal (marcas, logotipos, textos, imagens, layout e código) é protegido por direitos de propriedade intelectual. O uso só é permitido nos termos aqui previstos ou mediante autorização expressa.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="comunicacoes" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Comunicações e Opt-out</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>Podemos enviar comunicações institucionais e informativas. Quando a base for consentimento, você poderá <span className="highlight-red">revogá-lo</span> a qualquer tempo pelos canais disponibilizados (ex.: link de descadastramento).</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="rescisao" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Suspensão e Rescisão</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>Podemos suspender ou encerrar o acesso em caso de violação destes Termos, fraude, risco de segurança ou exigência legal. Quando possível, informaremos previamente.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="responsabilidade" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Limitação de Responsabilidade</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>Na extensão máxima permitida por lei, o CBTJ-AM não será responsável por danos indiretos, incidentais, lucros cessantes ou perdas de dados resultantes do uso do site ou de ofertas de terceiros.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="indenizacao" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Indenização</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>Você concorda em indenizar e isentar o CBTJ-AM de responsabilidades por reclamações decorrentes do uso indevido do site, violação destes Termos ou de direitos de terceiros.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="lei-foro" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Lei Aplicável e Foro</h2>
          <div className="mt-4 space-y-3 text-neutral-800 leading-relaxed">
            <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da <span className="highlight-red">Comarca de Manaus/AM</span>, com renúncia a qualquer outro, por mais privilegiado que seja.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="contato" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Contato</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Dúvidas sobre estes Termos? Fale conosco:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>E-mail: <a className="text-[#115898] hover:underline" href="mailto:contato@cbtj-am.org.br">contato@cbtj-am.org.br</a></li>
              <li>Canal de atendimento: informe seu canal oficial (ex.: formulário no site).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h2 id="atualizacoes" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Atualizações destes Termos</h2>
          <div className="mt-4 space-y-2 text-neutral-800 leading-relaxed">
            <p>Podemos atualizar estes Termos para refletir mudanças legais, técnicas ou operacionais. Manteremos a data de última atualização e, quando cabível, comunicaremos alterações relevantes.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 id="vigencia" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#115898] text-left">Vigência</h2>
          <div className="mt-4 text-neutral-800 leading-relaxed">
            <p>Estes Termos entram em vigor na data de sua publicação e permanecem válidos até substituição por nova versão.</p>
            <p className="mt-4 text-sm text-neutral-600">Última atualização: 27/10/2025</p>
          </div>
        </div>
      </section>
    </main>
  )
}
