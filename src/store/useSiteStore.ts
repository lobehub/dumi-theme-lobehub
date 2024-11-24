import type { ISiteContext } from 'dumi/dist/client/theme-api/context';
import {
  ILocale,
  INavItem,
  IRouteMeta,
  ISidebarGroup,
  IThemeConfig,
} from 'dumi/dist/client/theme-api/types';
import type { Location } from 'history';
import { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { SiteThemeConfig } from '@/types';

export type NavData = (INavItem & { children?: INavItem[] | undefined })[];

export type ISiteData = ISiteContext & {
  themeConfig: IThemeConfig & SiteThemeConfig;
};

export interface SiteStore {
  locale: ILocale;
  location: Location;
  navData: NavData;
  routeMeta: IRouteMeta;
  sidebar?: ISidebarGroup[];
  siteData: ISiteData;
  tabMeta?: NonNullable<IRouteMeta['tabs']>[0]['meta'];
}

export const createStore = (initState: SiteStore) =>
  createWithEqualityFn<SiteStore>()(
    devtools(() => initState, { name: 'lobe-docs' }),
    shallow,
  );

const { useStore, useStoreApi, Provider } = createContext<StoreApi<SiteStore>>();

export { Provider, useStore as useSiteStore, useStoreApi };
