import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Caminhos relativos: o site funciona em qualquer pasta ou endereço onde for publicado
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  build: {
    // O código gerado vai para dist/app/, para não se misturar com as imagens em dist/assets/
    assetsDir: 'app',
  },
})
