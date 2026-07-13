import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDirectory = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(rootDirectory, './src'),
    },
  },
  server: {
    allowedHosts: ['f7b2-2a00-1d36-e0e-100-c0aa-ee3a-e268-f8cd.ngrok-free.app'],
  },
})

