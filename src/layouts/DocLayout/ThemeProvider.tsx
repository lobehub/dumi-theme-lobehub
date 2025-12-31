import { ThemeProvider } from '@lobehub/ui';
import 'antd/dist/reset.css';
import isEqual from 'fast-deep-equal';
import { LazyMotion, domMax } from 'motion/react';
import { PropsWithChildren, memo } from 'react';

import { siteSelectors, useSiteStore, useThemeStore } from '@/store';
import customToken from '@/styles/customToken';

import AntdStaticMethods from './AntdStaticMethods';
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
        <ConfigProvider>
          <LazyMotion features={domMax}>{children}</LazyMotion>
        </ConfigProvider>
      </ThemeProvider>
    </StyleRegistry>
  );
});
