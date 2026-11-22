import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
 plugins: [
   react(),
   VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
     manifest: {
       name: "Tuler's Dynamic Dungeon",
       short_name: 'TDD',
       description: 'Aplicativo de criação e gerenciamento de fichas de rpg',
       theme_color: '#a00202ff',
       background_color: '#181818',
       display: 'standalone',
       icons: [
         {
           src: 'icons/android-chrome-192x192.png',
           sizes: '192x192',
           type: 'image/png',
         },
         {
           src: 'icons/android-chrome-512x512.png',
           sizes: '512x512',
           type: 'image/png',
         },
       ],
     },
   }),
 ],
});
