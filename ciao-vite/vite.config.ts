import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: './', // Usa percorsi relativi
  envDir:'./env',
  plugins: [react()],
  server: {
    port: 3000,         // Cambia la porta (default: 5173)
    open: true,         // Apre automaticamente il browser
    proxy: {            // Configura un proxy per backend API
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    }},
    build: {
      outDir: 'build',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  })
