/*
 * 
 * @Date: 2023-10-18 10:34:00
 * @LastEditors: hy yinvia1018@163.com
 * @LastEditTime: 2023-11-09 17:32:41
 * @FilePath: \FEDA\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:'@import "./src/assets/style/main.scss";'
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.220:59527/',
        changeOrigin: true,
        // ws: true,
        // secure: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      }
    }
  }
})
