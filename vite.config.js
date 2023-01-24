// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/grolly/',
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        weingut: resolve(__dirname, 'src/views/weingut.html'),
        shop: resolve(__dirname, 'src/views/shop.html'),
        warenkorb: resolve(__dirname, 'src/views/warenkorb.html'),
      },
    },
  },
})