import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: 'https://luetsrr.github.io/ut-stuttering/',
    integrations: [mdx()],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    image: {
        service: passthroughImageService(),
    },
});
  