import type { FeaturesProps, FooterProps, HeroProps } from '@lobehub/ui';

import type { SiteCustomToken } from '@/styles/customToken';

import type { HeroConfig } from './hero';

export interface ApiHeaderConfig {
  docUrl?: string | false;
  match?: string[];
  pkg?: string;
  sourceUrl?: string | false;
}

export interface FooterConfig {
  bottom?: FooterProps['bottom'];
  columns?: FooterProps['columns'];
}

export interface SiteThemeConfig {
  actions: HeroProps['actions'];
  apiHeader?: ApiHeaderConfig | false;
  description?: string;
  features: FeaturesProps['items'];
  footer?: string | false;
  footerConfig?: FooterConfig;
  giscus?: {
    category: string;
    categoryId: string;
    repo: `${string}/${string}`;
    repoId: string;
  };
  hero?: HeroConfig | Record<string, HeroConfig>;
  hideHomeNav?: boolean;
  logo?: string;
  name?: string;
  siteToken?: SiteConfigToken;
  socialLinks?: {
    discord?: `https://discord.gg/${string}`;
    github?: string;
  };
  title?: string;
}

export type SiteConfigToken = Partial<
  Pick<
    SiteCustomToken,
    'headerHeight' | 'footerHeight' | 'sidebarWidth' | 'tocWidth' | 'contentMaxWidth'
  >
>;
