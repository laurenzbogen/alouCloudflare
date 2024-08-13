import { defineConfig, passthroughImageService } from 'astro/config';
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), tailwind({ applyBaseStyles: false })],
  image: {
    domains: ['res.cloudinary.com'],
    service: passthroughImageService(),
  }
});
