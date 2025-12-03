import { AtomAsset } from 'dumi-assets-types';
import {
  ILocale,
  ILocalesConfig,
  INavItem,
  IPreviewerProps,
  IRouteMeta,
  ISidebarGroup,
} from 'dumi/dist/client/theme-api/types';
import { PICKED_PKG_FIELDS } from 'dumi/dist/constants';
import type { Location } from 'history';
import { ComponentType } from 'react';

import { globalBackgroundStyles } from '@/styles/globalStyles';
import { SiteThemeConfig } from '@/types';

export type NavData = (INavItem & { children?: INavItem[] | undefined })[];

export interface ISiteData {
  components: Record<string, AtomAsset>;
  demos: Record<
    string,
    {
      asset: IPreviewerProps['asset'];
      component: ComponentType;
      routeId: string;
    }
  >;
  entryExports: Record<string, any>;

  loading: boolean;
  locales: ILocalesConfig;
  pkg: Partial<Record<keyof typeof PICKED_PKG_FIELDS, any>>;
  setLoading: (status: boolean) => void;
  themeConfig: SiteThemeConfig;
}

export interface SiteStore {
  locale: ILocale;
  location: Location;
  navData: NavData;
  routeMeta: IRouteMeta;
  sidebar?: ISidebarGroup[];
  siteData: ISiteData;
  tabMeta?: NonNullable<IRouteMeta['tabs']>[0]['meta'];
}

export const initialThemeConfig: Partial<SiteThemeConfig> = {
  footer: 'Made with 🤯 by <a href="https://lobehub.com" target="_blank">LobeHub</a>',
  metadata: {
    icons: {
      apple: 'https://lobehub.com/apple-touch-icon.png',
      icon: 'https://lobehub.com/favicon-32x32.png',
      shortcut: 'https://lobehub.com/favicon.ico',
    },
    openGraph: {
      siteName: 'LobeHub',
    },
    twitter: {
      site: '@lobehub',
    },
  },
};

export const styles = [globalBackgroundStyles];

export const initialState: SiteStore = {
  locale: { id: 'en-US', name: 'English', suffix: '' },
  location: {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: '',
  },
  navData: [],

  routeMeta: {
    // @ts-ignore
    frontmatter: {},
    tabs: undefined,
    texts: [],
    toc: [],
  },

  sidebar: [],

  siteData: {
    components: {},
    demos: {},
    entryExports: {},
    loading: true,
    locales: [],
    pkg: {},
    // @ts-ignore
    setLoading: undefined,
    styles: styles,
    // @ts-ignore
    themeConfig: initialThemeConfig,
  },
};
