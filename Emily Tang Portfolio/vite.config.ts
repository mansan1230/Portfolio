import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/Emily Tang Portfolio', // 這裡填你的 Repo 名字，前後要有斜線
})
