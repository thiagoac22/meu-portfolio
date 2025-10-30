import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 🔥 Garante que todas as rotas do React (como /projetos, /sobre, etc.)
    // redirecionem para index.html, evitando erro 404
    historyApiFallback: true,
  },
})
