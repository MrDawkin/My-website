import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mrdawkin.github.io',
  base: '/My-website',
  integrations: [tailwind()],
  image: {
    remotePatterns: [],
  },
});
