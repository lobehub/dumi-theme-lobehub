import { defineConfig } from 'dumi';
import path from 'node:path';

import { homepage, name } from '../package.json';

const isProduction = process.env.NODE_ENV === 'production';
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
  name: 'DUMI',
  socialLinks: {
    github: homepage,
  },
  title: 'Dumi Theme LobeHub',
};

export default defineConfig({
  alias: {
    '@': path.join(__dirname, '../src'),
    'dumi-theme-lobehub': path.join(__dirname, '../src'),
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
  ssr: isProduction ? {} : false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Dumi Theme LobeHub',
});
