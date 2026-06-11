import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
   VitePWA({
    registerType:'autoUpdate',
   })
  ],
})
