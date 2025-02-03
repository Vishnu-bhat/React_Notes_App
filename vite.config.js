import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "jd6fzn-5174.csb.app",
      "jd6fzn-5173.csb.app",
      "jd6fzn-2222.csb.app",
      "jd6fzn-50000.csb.app",
    ],
  },
})
