// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  // TODO: actualizar con el dominio real de producción (se usa para sitemap.xml y robots.txt)
  site: 'https://binflow.ai',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), robotsTxt()]
});
