import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://tiagoflora.com',
  integrations: [mdx(), sitemap(), react(), svelte(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});