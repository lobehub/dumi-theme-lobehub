import { ThemeProvider } from '@lobehub/ui';
import { StyleProvider, extractStaticStyle } from 'antd-style';
import 'antd/dist/reset.css';
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
    <StyleProvider cache={extractStaticStyle.cache} speedy={process.env.NODE_ENV === 'production'}>
      <ThemeProvider
        appearance={themeMode !== 'auto' ? themeMode : undefined}
        customToken={(themeToken) => Object.assign({}, customToken(themeToken), userToken)}
        theme={{
          cssVar: true,
        }}
        themeMode={themeMode}
      >
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleProvider>
  );
});
