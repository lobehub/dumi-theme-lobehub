import { ThemeProvider } from '@lobehub/ui';
import 'antd/dist/reset.css';
import isEqual from 'fast-deep-equal';
import { PropsWithChildren, memo } from 'react';

import { siteSelectors, useSiteStore, useThemeStore } from '@/store';
import customToken from '@/styles/customToken';

import StyleRegistry from './StyleRegistry';

export default memo<PropsWithChildren>(({ children }) => {
  const themeMode = useThemeStore((st) => st.themeMode);
  const userToken = useSiteStore(siteSelectors.token, isEqual);

  return (
    <StyleRegistry>
      <ThemeProvider
        appearance={themeMode !== 'auto' ? themeMode : undefined}
        customToken={(themeToken) => Object.assign({}, customToken(themeToken), userToken)}
        themeMode={themeMode}
      >
        {children}
      </ThemeProvider>
    </StyleRegistry>
  );
});
