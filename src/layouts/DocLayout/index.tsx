import { ThemeProvider } from '@lobehub/ui';
import { extractStaticStyle } from 'antd-style';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import Favicons from '@/components/Favicons';
import { StoreUpdater } from '@/components/StoreUpdater';
import GlobalStyle from '@/layouts/DocLayout/GlobalStyle';
import { useThemeStore } from '@/store';
import customToken from '@/styles/customToken';

import DocumentLayout from './DocumentLayout';

// @ts-ignore
global.__ANTD_CACHE__ = extractStaticStyle.cache;

const App = memo(() => {
  const themeMode = useThemeStore((st) => st.themeMode, shallow);

  return (
    <>
      <Favicons />
      <StoreUpdater />
      <ThemeProvider
        cache={extractStaticStyle.cache}
        customToken={customToken}
        themeMode={themeMode}
      >
        <GlobalStyle />
        <DocumentLayout />
      </ThemeProvider>
    </>
  );
});

export default App;
