import { defineConfig } from 'dumi';
import { SiteThemeConfig } from 'dumi-theme-lobehub';
import { resolve } from 'node:path';

import { description, homepage, name } from '../package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig: SiteThemeConfig = {
  actions: [
    {
      icon: 'Github',
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/example',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  analytics: {
    plausible: {
      domain: 'dumi-theme.lobehub.com',
      scriptBaseUrl: 'https://plausible.lobehub-inc.cn',
    },
  },
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description,
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOJloKoM4CXsCu',
    repo: 'lobehub/lobe-ui',
    repoId: 'R_kgDOJloKoA',
  },
  lastUpdated: true,
  name: 'DUMI',
  prefersColor: {
    default: 'dark',
    switch: false,
  },
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
  title: 'Dumi Theme LobeHub',
};

export default defineConfig({
  alias: {
    'dumi-theme-lobehub': resolve(__dirname, '../src'),
  },
  apiParser: isProduction ? {} : false,
  base: '/',
  define: {
    'process.env': process.env,
  },
  exportStatic: {},
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://lobehub.com/favicon.ico'],
  jsMinifier: 'swc',
  locales: [{ id: 'en-US', name: 'English' }],
  mako: isWin || isProduction ? false : {},
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  resolve: {
    atomDirs: [{ dir: 'src', type: 'component' }],
    entryFile: isProduction ? './src/index.ts' : undefined,
  },
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
