import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';



export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    ViteImageOptimizer(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
