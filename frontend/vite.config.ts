import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],
  plugins: [vue({
    script: {
      defineModel: true
    }
  })],
  base: './',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },


})
