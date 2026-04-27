/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Design tokens — zmieniaj tutaj, wszystkie komponenty automatycznie się zaktualizują
        brand: {
          bg:      '#080C14',   // tło strony
          surface: '#0D1220',   // tło kart / sekcji
          card:    '#111827',   // podwyższone karty
          border:  '#1E293B',   // obramowania
          hover:   '#273549',   // hover na borderze
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
