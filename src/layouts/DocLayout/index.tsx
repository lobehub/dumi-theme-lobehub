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
import { PropsWithChildren, memo } from 'react';

import { StoreUpdater } from '@/components/StoreUpdater';
import { Provider, createStore } from '@/store';

import DocumentLayout from './DocumentLayout';
import Analytics from './Head/Analytics';
import Favicons from './Head/Favicons';
import Og from './Head/Og';
import StructuredData from './Head/StructuredData';
import ThemeProvider from './ThemeProvider';

const DocProvider = memo<PropsWithChildren>(({ children }) => {
  const siteData = useSiteData();
  const sidebar = useSidebarData();
  const routeMeta = useRouteMeta();
  const tabMeta = useTabMeta();
  const navData = useNavData();
  const location = useLocation();
  const locale = useLocale();
  return (
    <Provider
      createStore={() =>
        // @ts-ignore
        createStore({ locale, location, navData, routeMeta, sidebar, siteData, tabMeta })
      }
    >
      <Favicons />
      <Og />
      <Analytics />
      <StructuredData />
      <StoreUpdater />
      <ThemeProvider>
        <DocumentLayout>{children}</DocumentLayout>
      </ThemeProvider>
    </Provider>
  );
});

export default memo(() => {
  const outlet = useOutlet();
  return <DocProvider>{outlet}</DocProvider>;
});
