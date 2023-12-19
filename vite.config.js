import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import cleanup from '@by-association-only/vite-plugin-shopify-clean';

export default defineConfig({
  plugins: [
    cleanup(),
    shopify({
      sourceCodeDir: 'src',
      entrypointsDir: 'src/entrypoints'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].min.js",
        chunkFileNames: "[name].[hash].min.js",
        assetFileNames: "[name].[hash].min[extname]",
      },
    },
  },
});
