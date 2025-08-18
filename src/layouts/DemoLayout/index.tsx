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

import { Provider, createStore } from '@/store';

import Analytics from '../DocLayout/Head/Analytics';
import Favicons from '../DocLayout/Head/Favicons';
import Og from '../DocLayout/Head/Og';
import StructuredData from '../DocLayout/Head/StructuredData';
import ThemeProvider from '../DocLayout/ThemeProvider';
import GlobalStyle from './GlobalStyle';

const DemoProvider = memo<PropsWithChildren>(({ children }) => {
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
      <ThemeProvider>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  );
});

export default memo(() => {
  const outlet = useOutlet();
  return <DemoProvider>{outlet}</DemoProvider>;
});
