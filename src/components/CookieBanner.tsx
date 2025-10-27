'use client'

import React from 'react'

// Cookie Banner simples (LGPD) — Aceitar/Rejeitar e link para a Política de Privacidade
// Armazena a decisão no localStorage para não reexibir após escolha.
// Como usar: importe e renderize <CookieBanner/> no seu layout.tsx, antes de </body>.

const CONSENT_KEY = 'cbtj-cookie-consent-v1'

function getStoredConsent(): 'accepted' | 'rejected' | null {
  if (typeof window === 'undefined') return null
  const v = window.localStorage.getItem(CONSENT_KEY)
  return v === 'accepted' || v === 'rejected' ? (v as any) : null
}

export default function CookieBanner() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const v = getStoredConsent()
    if (!v) setOpen(true)
  }, [])

  const acceptAll = () => {
    window.localStorage.setItem(CONSENT_KEY, 'accepted')
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: { status: 'accepted' } }))
    setOpen(false)
  }

  const rejectOptional = () => {
    window.localStorage.setItem(CONSENT_KEY, 'rejected')
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: { status: 'rejected' } }))
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-lg">
          <div className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-[#115898]">Nós usamos cookies</h2>
            <p className="mt-2 text-sm sm:text-[15px] text-neutral-700 leading-relaxed">
              Utilizamos cookies para garantir o funcionamento do site e melhorar sua experiência. Você pode aceitar todos
              os cookies ou rejeitar os opcionais. Leia nossa{' '}
              <a className="text-[#115898] font-medium underline hover:no-underline" href="/politica-de-privacidade" target="_self">
                Política de Privacidade
              </a>.
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                onClick={rejectOptional}
                className="order-2 sm:order-1 inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                Rejeitar opcionais
              </button>
              <button
                onClick={acceptAll}
                className="order-1 sm:order-2 inline-flex items-center justify-center rounded-xl bg-[#115898] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110 transition-all"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
