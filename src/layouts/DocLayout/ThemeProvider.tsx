import { ThemeProvider } from '@lobehub/ui';
import isEqual from 'fast-deep-equal';
import { PropsWithChildren, memo } from 'react';

import GlobalStyle from '@/layouts/DocLayout/GlobalStyle';
import { siteSelectors, useSiteStore, useThemeStore } from '@/store';
import customToken from '@/styles/customToken';

export default memo<PropsWithChildren>(({ children }) => {
  const themeMode = useThemeStore((st) => st.themeMode);
  const userToken = useSiteStore(siteSelectors.token, isEqual);

  return (
    <ThemeProvider
      customToken={(themeToken) => Object.assign({}, customToken(themeToken), userToken)}
      themeMode={themeMode}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
});
