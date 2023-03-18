import { fileURLToPath, URL } from 'node:url'
import nodePolyfills from 'rollup-plugin-node-polyfills/'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        nodePolyfills()
      ]
    }
  }
})
