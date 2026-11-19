import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
 plugins: [
   react(),
   VitePWA({
     registerType: 'autoUpdate',
     includeAssets: [
       'favicon.svg',
       'favicon.ico',
       'robots.txt',
       'apple-touch-icon.png',
     ],
     manifest: {
       name: "Tuler's Dynamic Dungeon",
       short_name: 'TDD',
       description: 'Aplicativo de criação e gerenciamento de fichas de rpg',
       theme_color: '#a00202ff',
       background_color: '#181818',
       display: 'standalone',
       icons: [
         {
           src: 'icons/icon-192x192',
           sizes: '192x192',
           type: 'image/png',
         },
         {
           src: 'icons/icon-512x512',
           sizes: '512x512',
           type: 'image/png',
         },
       ],
     },
   }),
 ],
});
