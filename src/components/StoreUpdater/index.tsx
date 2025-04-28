import { useDebounceEffect } from 'ahooks';
import { useLocale, useLocation, useNavData, useSidebarData, useSiteData, useTabMeta } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import * as React from 'react';

import { SiteStore, useStoreApi } from '../../store/useSiteStore';
import { useRouteMeta } from './useRouteMeta';

const isBrowser = typeof window !== 'undefined';

const SSRInit: Record<string, boolean> = {};

const useReact18xUpdater = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  useEffect(() => {
    (React as any).startTransition(() => {
      effect();
    });
  }, deps);
};
const useLegacyUpdater = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  useDebounceEffect(
    () => {
      effect();
    },
    deps,
    { maxWait: 96, wait: 32 },
  );
};
const useUpdater =
  typeof (React as any).startTransition === 'function' ? useReact18xUpdater : useLegacyUpdater;

const useSyncState = <T extends keyof SiteStore>(
  key: T,
  value: SiteStore[T],
  updateMethod?: (key: T, value: SiteStore[T]) => void,
) => {
  const storeApi = useStoreApi();
  const updater = updateMethod
    ? updateMethod
    : (key: T, value: SiteStore[T]) => storeApi.setState({ [key]: value });

  // 如果是 Node 环境，直接更新一次 store
  // 但是为了避免多次更新 store，所以加一个标记
  if (!isBrowser && !SSRInit[key]) {
    updater(key, value);
    SSRInit[key] = true;
  }

  useUpdater(() => {
    updater(key, value);
  }, [value]);
};

const displayLangHomeNavMap: Record<string, string> = {
  'en-US': 'Home',
  'zh-CN': '首页',
};

const getHomeNav = (id: string) => ({
  activePath: '/',
  link: '/',
  title: displayLangHomeNavMap[id],
});

export const StoreUpdater = memo(() => {
  const siteData = useSiteData();
  const sidebar = useSidebarData();
  const tabMeta = useTabMeta();
  const navData = useNavData();
  const location = useLocation();
  const locale = useLocale();
  const storeApi = useStoreApi();

  useRouteMeta();

  // @ts-ignore
  useSyncState('siteData', siteData, () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setLoading, ...data } = siteData;
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      siteData: { setLoading: _, ...prevData },
    } = storeApi.getState();

    if (isEqual(data, prevData)) return;

    // @ts-ignore
    storeApi.setState({ siteData });
  });

  useSyncState('sidebar', sidebar);
  useSyncState('location', location);
  useSyncState('tabMeta', tabMeta);
  useSyncState('locale', locale);

  useSyncState('navData', navData, () => {
    const data = siteData.themeConfig.hideHomeNav ? navData : [getHomeNav(locale.id), ...navData];

    storeApi.setState({ navData: data });
  });

  return null;
});
