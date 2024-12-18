import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact(), ViteImageOptimizer()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "esnext",
    cssMinify: "esbuild",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
    minify: "esbuild",
    chunkSizeWarningLimit: 500,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
  server: {
    port: 3000,
    open: true,
  },
});
