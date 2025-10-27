// src/config/site.ts
// Centraliza contatos institucionais e utilitários para WhatsApp
// Número confirmado: +55 92 99379-7536 (válido no formato E.164)

export const WHATS = {
  primary: '5521975895244', // Header e "Solicitar"
  contact: '5592993797536', // Fale Conosco (3 botões)
} as const

export const SITE = {
  name: 'CBTJ-AM',
} as const

// Normaliza para apenas dígitos
function onlyDigits(s: string) {
  return (s || '').replace(/\D+/g, '')
}

// Valida padrão BR E.164 (55 + DDD(2) + 9 + 8 dígitos)
function isValidBrMobileE164(s: string) {
  return /^55\d{2}9\d{8}$/.test(s)
}

function assertValidPhone(label: string, number: string) {
  const n = onlyDigits(number)
  if (!isValidBrMobileE164(n)) {
    console.warn(`[CBTJ-AM][WhatsApp] Número inválido para ${label}: "${number}". Esperado: 55 + DDD(2) + 9 + 8 dígitos (total 13). Ex.: 5592999999999.`)
  }
  return n
}

// API oficial (mais estável para preservar ?text=)
export function whatsappLink(number: string, message?: string) {
  const n = assertValidPhone('whatsappLink', number)
  const base = `https://api.whatsapp.com/send?phone=${n}`
  if (!message) return base
  return `${base}&text=${encodeURIComponent(message)}`
}

// Fallback opcional (wa.me)
export function whatsappLinkWa(number: string, message?: string) {
  const n = assertValidPhone('whatsappLinkWa', number)
  const base = `https://wa.me/${n}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

// Mensagens padronizadas
export const messages = {
  cadastro: 'Olá! Sou servidor do TJ-AM e quero me cadastrar no CBTJ-AM.',
  parceiro: (marca: string) => `Olá! Sou servidor do TJ-AM e quero solicitar o benefício da marca ${marca}.`,
  faleConosco: {
    segundaVia: 'Olá! Gostaria de solicitar a segunda via do meu boleto.',
    comercial: 'Olá! Gostaria de falar com o setor comercial do CBTJ-AM.',
    ouvidoria: 'Olá! Desejo falar com a Ouvidoria do CBTJ-AM.',
  },
} as const

// Links prontos (use estes nos componentes)
export const links = {
  header: {
    cadastro: whatsappLink(WHATS.primary, messages.cadastro),
  },
  parceiros: {
    solicitar: (marca: string) => whatsappLink(WHATS.primary, messages.parceiro(marca)),
  },
  contato: {
    segundaVia: whatsappLink(WHATS.contact, messages.faleConosco.segundaVia),
    comercial: whatsappLink(WHATS.contact, messages.faleConosco.comercial),
    ouvidoria: whatsappLink(WHATS.contact, messages.faleConosco.ouvidoria),
  },
} as const

// Tracking opcional
export function withUtm(url: string, utm: { source?: string; medium?: string; campaign?: string } = {}) {
  const u = new URL(url)
  if (utm.source) u.searchParams.set('utm_source', utm.source)
  if (utm.medium) u.searchParams.set('utm_medium', utm.medium)
  if (utm.campaign) u.searchParams.set('utm_campaign', utm.campaign)
  return u.toString()
}
