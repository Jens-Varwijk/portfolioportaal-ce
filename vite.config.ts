import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  root,
  base: '/portfolioportaal-ce/',
  plugins: [react()],
  server: {
    fs: { allow: [root] },
  },
})
