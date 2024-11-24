import { ThemeProvider } from '@lobehub/ui';
import {
  useLocale,
  useLocation,
  useNavData,
  useOutlet,
  useRouteMeta,
  useSidebarData,
  useSiteData,
  useTabMeta,
} from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useMemo } from 'react';

import Analytics from '@/components/Analytics';
import { Provider, createStore, useThemeStore } from '@/store';

import Favicons from '../DocLayout/Head/Favicons';
import Og from '../DocLayout/Head/Og';
import GlobalStyle from './GlobalStyle';

const App = memo(({ initState }: any) => {
  const themeMode = useThemeStore((st) => st.themeMode, isEqual);
  const outlet = useOutlet();

  return (
    <Provider createStore={() => createStore(initState)}>
      <Favicons />
      <Og />
      <Analytics />
      <ThemeProvider themeMode={themeMode}>
        <GlobalStyle />
        {outlet}
      </ThemeProvider>
    </Provider>
  );
});

export default memo(() => {
  const siteData = useSiteData();
  const sidebar = useSidebarData();
  const routeMeta = useRouteMeta();
  const tabMeta = useTabMeta();
  const navData = useNavData();
  const location = useLocation();
  const locale = useLocale();

  const initState = useMemo(
    () => ({ locale, location, navData, routeMeta, sidebar, siteData, tabMeta }),
    [],
  );

  return <App initState={initState} />;
});
