import { ThemeProvider } from '@lobehub/ui';
import 'antd/dist/reset.css';
import isEqual from 'fast-deep-equal';
import { PropsWithChildren, memo } from 'react';

import { siteSelectors, useSiteStore, useThemeStore } from '@/store';
import customToken from '@/styles/customToken';

import AntdStaticMethods from './AntdStaticMethods';
import AntdV5MonkeyPatch from './AntdV5MonkeyPatch';
import ConfigProvider from './ConfigProvider';
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
        <AntdStaticMethods />
        <ConfigProvider>{children}</ConfigProvider>
      </ThemeProvider>
      <AntdV5MonkeyPatch />
    </StyleRegistry>
  );
});
