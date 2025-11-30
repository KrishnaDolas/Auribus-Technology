// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          keyframes: {
            marquee: {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }, // content is duplicated
            },
          },
          animation: {
            'marquee-slow': 'marquee 25s linear infinite',
          },
        },
      },
      plugins: [],
    }),
  ],base: "/Auribus-Technology/",
})
