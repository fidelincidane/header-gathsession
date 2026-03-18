import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Usa la nueva API de Sass
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
});