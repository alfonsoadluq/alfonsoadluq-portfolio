// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://alfonsoadluq.com",
  integrations: [partytown(), sitemap()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@assets": "/src/assets",
        "@img": "/src/assets/img",
        "@icon": "/src/assets/icons",
        "@project": "/src/assets/img/projects",
        "@components": "/src/components",
      },
    },
  },
});