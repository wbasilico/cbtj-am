'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Route } from 'next'
import type { UrlObject } from 'url'
import { links } from '@/config/site'


export default function Header() {
  const [open, setOpen] = useState(false)
  const wa = 'https://wa.me/5592999999999' // TODO: substituir número oficial

  // âncora tipada (resolve erro do typed routes)
  const contatoHref: UrlObject = { pathname: '/', hash: 'fale-conosco' }

  // itens do menu (apenas rotas puras tipadas como Route)
  const items: ReadonlyArray<{ label: string; href: Route }> = [
    { label: 'Home', href: '/' as Route },
    { label: 'Parceiros', href: '/parceiros' as Route },
    { label: 'Sobre', href: '/sobre' as Route },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo + Titles */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="CBTJ-AM" width={56} height={56} priority />
          <div className="leading-tight">
            <div
              className="text-cbtj-blue"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 800 }}
            >
              CBTJ-AM
            </div>
            <div className="text-[12px] text-cbtj-dark font-light">
              Clube de Benefícios do Tribunal de Justiça do Amazonas
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 md:flex">
          {items.map((i) => (
            <Link
              key={i.label}
              href={i.href}
              className="rounded-btn px-4 py-2 font-bold text-cbtj-blue transition-colors duration-200 hover:bg-cbtj-red hover:text-cbtj-light"
            >
              {i.label}
            </Link>
          ))}

          {/* “Contato” usando UrlObject (pathname + hash) */}
          <Link
            href={contatoHref}
            className="rounded-btn px-4 py-2 font-bold text-cbtj-blue transition-colors duration-200 hover:bg-cbtj-red hover:text-cbtj-light"
          >
            Contato
          </Link>

          <a href={links.header.cadastro} target="_blank" rel="noopener noreferrer" className="btn">
            Quero me Cadastrar
          </a>
        </nav>

        {/* Mobile Hamburger (SVG inline com rotação suave) */}
        <button
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-btn focus:outline-none focus:ring-2 focus:ring-cbtj-blue/40 text-cbtj-blue"
        >
          <span
            key={open ? 'icon-x' : 'icon-burger'}
            className={`inline-block transition-transform duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}
          >
            {open ? (
              // X
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Hamburger
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
        </button>
      </div>

      {/* Mobile Panel */}
      {open && (
        <div id="mobile-nav" className="bg-white md:hidden border-t border-gray-200">
          <div className="flex flex-col items-center gap-3 py-4">
            <Link
              href="/"
              className="rounded-btn px-4 py-2 font-bold text-cbtj-blue transition-colors duration-200 hover:bg-cbtj-red hover:text-cbtj-light"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/parceiros"
              className="rounded-btn px-4 py-2 font-bold text-cbtj-blue transition-colors duration-200 hover:bg-cbtj-red hover:text-cbtj-light"
              onClick={() => setOpen(false)}
            >
              Parceiros
            </Link>
            <Link
              href={contatoHref}
              className="rounded-btn px-4 py-2 font-bold text-cbtj-blue transition-colors duration-200 hover:bg-cbtj-red hover:text-cbtj-light"
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
            <Link
              href="/sobre"
              className="rounded-btn px-4 py-2 font-bold text-cbtj-blue transition-colors duration-200 hover:bg-cbtj-red hover:text-cbtj-light"
              onClick={() => setOpen(false)}
            >
              Sobre
            </Link>
            <a href={links.header.cadastro} target="_blank" rel="noopener noreferrer" className="btn w-11/12 max-w-sm" onClick={() => setOpen(false)}>
              Quero me Cadastrar
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
