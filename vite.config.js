import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myportfolio/',
  plugins: [vue()],
  build: {outDir:"docs"}
})
