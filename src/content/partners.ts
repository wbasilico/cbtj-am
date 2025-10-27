import { toSlug } from '@/utils/slug'

export const CATEGORIES = [
  'Educação',
  'Fitness',
  'Alimentação & Delivery',
  'Varejo & Marketplace',
  'Eletrônicos & Tech',
  'Farmácia & Beleza',
  'Viagem & Transporte',
  'Entretenimento & Streaming',
  'Telecom',
] as const

export type Category = (typeof CATEGORIES)[number]

export type Partner = {
  name: string
  discount: string // '6%', 'até 45%', 'R$ 100', etc.
  category: Category
  logo: string // /public/partners/brand-<nn>.png
  bg?: string   // /public/partners-bg/brand-<nn>.jpg (opcional)
}

export const SUBTITLE = 'Conectando você às melhores oportunidades de economia e qualidade de vida.'

// Logos no padrão: /public/partners/brand-01.png .. brand-26.png
// BGs (opcional):  /public/partners-bg/brand-01.jpg .. brand-26.jpg
// A ordem segue a sua planilha (1..26) para manter o mapeamento.
export const PARTNERS: Partner[] = [
  { name: 'Minds English School', discount: '40%',            category: 'Educação',                    logo: '/partners/brand-01.png', bg: '/partners-bg/brand-01.jpg' },
  { name: 'Live Academia',         discount: '20%',            category: 'Fitness',                     logo: '/partners/brand-02.png', bg: '/partners-bg/brand-02.jpg' },
  { name: 'Temu',                  discount: '6%',             category: 'Varejo & Marketplace',        logo: '/partners/brand-03.png', bg: '/partners-bg/brand-03.jpg' },
  { name: 'Decolar',               discount: 'R$ 100',         category: 'Viagem & Transporte',         logo: '/partners/brand-04.png', bg: '/partners-bg/brand-04.jpg' },
  { name: 'iFood',                 discount: '2%',             category: 'Alimentação & Delivery',      logo: '/partners/brand-05.png', bg: '/partners-bg/brand-05.jpg' },
  { name: 'Lacoste',               discount: '6%',             category: 'Varejo & Marketplace',        logo: '/partners/brand-06.png', bg: '/partners-bg/brand-06.jpg' },
  { name: 'Riachuelo',             discount: '3%',             category: 'Varejo & Marketplace',        logo: '/partners/brand-07.png', bg: '/partners-bg/brand-07.jpg' },
  { name: 'Casas Bahia',           discount: 'até 45%',        category: 'Varejo & Marketplace',        logo: '/partners/brand-08.png', bg: '/partners-bg/brand-08.jpg' },
  { name: 'Magalu',                discount: 'até 35%',        category: 'Varejo & Marketplace',        logo: '/partners/brand-09.png', bg: '/partners-bg/brand-09.jpg' },
  { name: 'Samsung',               discount: 'até 30%',        category: 'Eletrônicos & Tech',          logo: '/partners/brand-10.png', bg: '/partners-bg/brand-10.jpg' },
  { name: 'China in Box',          discount: '8%',             category: 'Alimentação & Delivery',      logo: '/partners/brand-11.png', bg: '/partners-bg/brand-11.jpg' },
  { name: 'Disney+',               discount: '2%',             category: 'Entretenimento & Streaming',  logo: '/partners/brand-12.png', bg: '/partners-bg/brand-12.jpg' },
  { name: 'Eudora',                discount: '12%',            category: 'Farmácia & Beleza',           logo: '/partners/brand-13.png', bg: '/partners-bg/brand-13.jpg' },
  { name: 'Airbnb',                discount: '20%',            category: 'Viagem & Transporte',         logo: '/partners/brand-14.png', bg: '/partners-bg/brand-14.jpg' },
  { name: 'Apple Store',           discount: 'até R$ 7.798,80',category: 'Eletrônicos & Tech',          logo: '/partners/brand-15.png', bg: '/partners-bg/brand-15.jpg' },
  { name: 'Águia Branca',          discount: '20%',            category: 'Viagem & Transporte',         logo: '/partners/brand-16.png', bg: '/partners-bg/brand-16.jpg' },
  { name: 'Nespresso',             discount: '4%',             category: 'Eletrônicos & Tech',          logo: '/partners/brand-17.png', bg: '/partners-bg/brand-17.jpg' },
  { name: 'LG',                    discount: '20%',            category: 'Eletrônicos & Tech',          logo: '/partners/brand-18.png', bg: '/partners-bg/brand-18.jpg' },
  { name: 'TIM',                   discount: 'R$ 30',          category: 'Telecom',                     logo: '/partners/brand-19.png', bg: '/partners-bg/brand-19.jpg' },
  { name: 'Drogaria Venancio',     discount: 'Ofertas exclusivas', category: 'Farmácia & Beleza',      logo: '/partners/brand-20.png', bg: '/partners-bg/brand-20.jpg' },
  { name: "Domino's Pizza",       discount: '30%',            category: 'Alimentação & Delivery',      logo: '/partners/brand-21.png', bg: '/partners-bg/brand-21.jpg' },
  { name: 'C&A',                   discount: '7,5%',           category: 'Varejo & Marketplace',        logo: '/partners/brand-22.png', bg: '/partners-bg/brand-22.jpg' },
  { name: 'Carrefour',             discount: 'até R$ 200',     category: 'Varejo & Marketplace',        logo: '/partners/brand-23.png', bg: '/partners-bg/brand-23.jpg' },
  { name: 'Pizza Hut',             discount: '10%',            category: 'Alimentação & Delivery',      logo: '/partners/brand-24.png', bg: '/partners-bg/brand-24.jpg' },
  { name: 'UCI',                   discount: 'até 44%',        category: 'Entretenimento & Streaming',  logo: '/partners/brand-25.png', bg: '/partners-bg/brand-25.jpg' },
  { name: 'Cinemark',              discount: 'até 40%',        category: 'Entretenimento & Streaming',  logo: '/partners/brand-26.png', bg: '/partners-bg/brand-26.jpg' },
]
