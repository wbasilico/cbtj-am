import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-0 pt-0 bg-cbtj-blue text-cbtj-light">
      {/* Row 1 */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3 text-center md:text-left">
        {/* Col 1: Logo, address, CNPJ */}
        <div className="space-y-3">
          <Link href="/" className="inline-block">
            <Image src="/logo-footer.png" alt="CBTJ-AM" width={147} height={59} />
          </Link>
          <address className="not-italic text-sm leading-relaxed">
            Rua Major Gabriel, 1629 – Praça 14 de Janeiro – Manaus/AM<br/>
            CEP 69.020-266
          </address>
          <p className="text-sm">CNPJ: 10.782.626/0001-50</p>
        </div>

        {/* Col 2: Links */}
        <div>
          <h4 className="mb-3 text-lg font-bold">Links Institucionais</h4>
          <ul className="space-y-2">
            <li><Link href="/politica-de-privacidade" className="underline-offset-4 hover:underline">Políticas de Privacidade</Link></li>
            <li><Link href="/termos-de-uso" className="underline-offset-4 hover:underline">Termos de Uso</Link></li>
          </ul>
        </div>

        {/* Col 3: Socials */}
        <div>
          <h4 className="mb-3 text-lg font-bold">Siga o CBTJ-AM nas redes</h4>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a href="https://www.facebook.com/profile.php?id=61582439217842" target="_blank" aria-label="Facebook" className="transition-transform duration-200 hover:-translate-y-1">
              <Image src="/facebook.png" alt="Facebook" width={36} height={36} />
            </a>
            <a href="https://www.instagram.com/clubetj_am/" target="_blank" aria-label="Instagram" className="transition-transform duration-200 hover:-translate-y-1">
              <Image src="/instagram.png" alt="Instagram" width={36} height={36} />
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-sm">© CBTJ-AM 2025 — Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}
