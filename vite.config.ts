import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: [],
    manifest: {
      theme_color: "#18181b",
      background_color: "#18181b",
      display: "standalone",
      scope: "/",
      start_url: "/",
      name: "FutProMaster",
      short_name: "FTM",
      description: "Gerencie partidas",
      icons: [
        {
          src: "/logo_1.png",
          sizes: "161x161",
          type: "image/png",
        }
      ],
    },
  })],
})
