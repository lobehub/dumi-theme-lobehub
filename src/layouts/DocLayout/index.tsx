import {
  useLocale,
  useLocation,
  useNavData,
  useRouteMeta,
  useSidebarData,
  useSiteData,
  useTabMeta,
} from 'dumi';
import { memo, useMemo } from 'react';

import { StoreUpdater } from '@/components/StoreUpdater';
import { Provider, createStore } from '@/store';

import DocumentLayout from './DocumentLayout';
import Analytics from './Head/Analytics';
import Favicons from './Head/Favicons';
import Og from './Head/Og';
import StructuredData from './Head/StructuredData';
import ThemeProvider from './ThemeProvider';

const App = memo(({ initState }: any) => {
  return (
    <Provider createStore={() => createStore(initState)}>
      <Favicons />
      <Og />
      <Analytics />
      <StructuredData />
      <StoreUpdater />
      <ThemeProvider>
        <DocumentLayout />
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
