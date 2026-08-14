import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    tailwind(),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
