import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  css: {postcss: './postcss.config.js'},
  plugins: [
    vue(),
    legacy({
      targets: ['since 2015',],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    ViteFonts({google: {
      families: [
        {
          name: 'Open Sans',
          styles: 'wght@400;600;700',
          defer: true,
        },
      ]
    }}),
  ]
})
