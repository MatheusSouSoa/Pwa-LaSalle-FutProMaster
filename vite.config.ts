import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: [],
    manifest: {
      short_name: "FutProMaster",
      name: "FutProMaster",
      start_url: "/",
      display: "standalone",
      background_color: "#000000",
      theme_color: "#ffffff",
      description: "Gerencie partidas",
      scope: "/",
      icons: [
              {
                src: "/logo_192.png",
                sizes: "192x192",
                type: "image/png",
              },
              {
                src: "/logo_256.png",
                sizes: "256x256",
                type: "image/png",
              },
              {
                src: "/icon_384.png",
                sizes: "384x384",
                type: "image/png",
              },
              {
                src: "/icon_512.png",
                sizes: "512x512",
                type: "image/png",
              },
            ],
    },
    // strategies: "injectManifest",
    workbox: {
      skipWaiting: true,
      clientsClaim: true,
    },
    devOptions: {
      enabled: true
    }
  })],
})
// export default defineConfig({
//   plugins: [react(), VitePWA({
//     registerType: 'autoUpdate',
//     includeAssets: [],
//     manifest: {
//       theme_color: "#18181b",
//       background_color: "#18181b",
//       display: "standalone",
//       scope: "/",
//       start_url: "/",
//       name: "FutProMaster",
//       short_name: "FTM",
//       description: "Gerencie partidas",
//       icons: [
//         {
//           src: "/logo_1.png",
//           sizes: "161x161",
//           type: "image/png",
//         }
//       ],
//     },
//   })],
// })
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: "autoUpdate",
//       includeAssets: ["/img/home-illustration.svg", "/favicon.svg"],
//       manifest: {
//         theme_color: "#18181b",
//         background_color: "#18181b",
//         display: "standalone",
//         scope: "/",
//         start_url: "/login",
//         name: "KpzFinances",
//         short_name: "KpzFinances",
//         description: "A Finance App",
//         icons: [
//           {
//             src: "/icon-192x192.png",
//             sizes: "192x192",
//             type: "image/png",
//           },
//           {
//             src: "/icon-256x256.png",
//             sizes: "256x256",
//             type: "image/png",
//           },
//           {
//             src: "/icon-384x384.png",
//             sizes: "384x384",
//             type: "image/png",
//           },
//           {
//             src: "/icon-512x512.png",
//             sizes: "512x512",
//             type: "image/png",
//           },
//         ],
//       },
//       devOptions: {
//         enabled: true,
//       },
//       strategies: "injectManifest",
//       workbox: {
//         skipWaiting: true,
//         clientsClaim: true,
//       },
//     }),
//   ],
// });