import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from '../package.json';

const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      icon: 'Github',
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/action-icon',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description: 'Lobe UI is an open-source UI component library for building chatbot web apps',
  features: [
    {
      description:
        'Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.',
      icon: 'Palette',
      title: 'Themeable',
    },
    {
      description:
        'voids unnecessary styles props at runtime, making it more performant than other UI libraries.',
      icon: 'Zap',
      title: 'Fast',
    },
    {
      description:
        'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
      icon: 'MoonStar',
      title: 'Light & Dark UI',
    },
  ],
  footer: 'Made with 🤯 by LobeHub',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOJloKoM4CXsCu',
    repo: 'lobehub/lobe-ui',
    repoId: 'R_kgDOJloKoA',
  },
  name: 'DUMI',
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
  title: 'Dumi Theme LobeHub',
};

export default defineConfig({
  alias: {
    '@': resolve(__dirname, '../src'),
    'dumi-theme-lobehub': resolve(__dirname, '../src'),
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  define: {
    'process.env': process.env,
  },
  favicons: ['https://npm.elemecdn.com/@lobehub/assets-favicons/assets/favicon.ico'],
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  ssr: false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Dumi Theme LobeHub',
});
