import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cbtj: {
          blue: '#245894',
          red: '#c73633',
          light: '#F2F2F2',
          dark: '#333333',
          white: '#FFFFFF'
        }
      },
      borderRadius: {
        'btn': '15px'
      },
      keyframes: {
        marqueeL: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeR: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        marqueeL: 'marqueeL 35s linear infinite',
        marqueeR: 'marqueeR 35s linear infinite'
      }
    }
  },
  plugins: []
}
export default config
