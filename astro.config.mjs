import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://selimaidi.com',
  integrations: [
    sitemap()
  ],
  // Output for Vercel
  output: 'static',
  build: {
    // Optimize assets
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
