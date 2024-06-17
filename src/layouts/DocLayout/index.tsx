import { ThemeProvider } from '@lobehub/ui';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import Favicons from '@/components/Favicons';
import { StoreUpdater } from '@/components/StoreUpdater';
import GlobalStyle from '@/layouts/DocLayout/GlobalStyle';
import { siteSelectors, useSiteStore, useThemeStore } from '@/store';
import customToken from '@/styles/customToken';

import DocumentLayout from './DocumentLayout';

const App = memo(() => {
  const themeMode = useThemeStore((st) => st.themeMode, shallow);
  const userToken = useSiteStore(siteSelectors.token);

  return (
    <>
      <Favicons />
      <StoreUpdater />
      <ThemeProvider
        customToken={(themeToken) => Object.assign({}, customToken(themeToken), userToken)}
        themeMode={themeMode}
      >
        <GlobalStyle />
        <DocumentLayout />
      </ThemeProvider>
    </>
  );
});

export default App;
