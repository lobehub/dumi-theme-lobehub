import { ThemeProvider } from '@lobehub/ui';
import { extractStaticStyle } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { PropsWithChildren, memo } from 'react';

import GlobalStyle from '@/layouts/DocLayout/GlobalStyle';
import { siteSelectors, useSiteStore, useThemeStore } from '@/store';
import customToken from '@/styles/customToken';

//@ts-ignore
global.__ANTD_CACHE__ = extractStaticStyle.cache;

export default memo<PropsWithChildren>(({ children }) => {
  const themeMode = useThemeStore((st) => st.themeMode);
  const userToken = useSiteStore(siteSelectors.token, isEqual);

  return (
    <ThemeProvider
      cache={extractStaticStyle.cache}
      customToken={(themeToken) => Object.assign({}, customToken(themeToken), userToken)}
      prefixCls={'site'}
      themeMode={themeMode}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
});
