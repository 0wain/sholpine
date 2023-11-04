import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";

export default defineConfig({
  plugins: [
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
