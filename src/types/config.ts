import type { FooterProps } from '@lobehub/ui';
import type { FeaturesProps, HeroProps } from '@lobehub/ui/awesome';
import type { LobeHubProps } from '@lobehub/ui/brand';
import { IThemeConfig } from 'dumi/dist/client/theme-api/types';
import { FooterColumn } from 'rc-footer/es/column';

import type { SiteCustomToken } from '@/styles/customToken';

import type { HeroConfig } from './hero';

export interface ApiHeaderConfig {
  docUrl?: string | false;
  match?: string[];
  pkg?: string;
  sourceUrl?: string | false;
  type?: 'component' | 'doc';
}

export interface FooterConfig {
  bottom?: string;
  columns?: FooterProps['columns'];
  moreProducts?: FooterColumn;
  resources?: FooterColumn;
}

export interface SiteThemeConfig extends IThemeConfig {
  actions?: HeroProps['actions'];
  analytics?: {
    clarity?: {
      projectId: string;
    };
    googleAnalytics?: {
      measurementId: string;
    };
    plausible?: {
      domain: string;
      scriptBaseUrl: string;
    };
  };
  apiHeader?: ApiHeaderConfig | false;
  description?: string;
  docStyle?: 'block' | 'pure';
  features?: FeaturesProps['items'];
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
  logoType?: LobeHubProps['type'];
  metadata?: {
    description?: string;
    icons?: {
      apple?: string;
      icon?: string;
      shortcut?: string;
    };
    manifest?: string;
    openGraph?: {
      description?: string;
      image?: string;
      siteName?: string;
      title?: string;
    };
    title?: string;
    twitter?: {
      description?: string;
      image?: string;
      site?: string;
      title?: string;
    };
  };
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
