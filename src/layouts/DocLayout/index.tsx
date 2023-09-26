import { ThemeProvider } from '@lobehub/ui';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import Favicons from '@/components/Favicons';
import { StoreUpdater } from '@/components/StoreUpdater';
import GlobalStyle from '@/layouts/DocLayout/GlobalStyle';
import { useThemeStore } from '@/store';
import customToken from '@/styles/customToken';

import DocumentLayout from './DocumentLayout';

const App = memo(() => {
  const themeMode = useThemeStore((st) => st.themeMode, shallow);

  return (
    <>
      <Favicons />
      <StoreUpdater />
      <ThemeProvider customToken={customToken} themeMode={themeMode}>
        <GlobalStyle />
        <DocumentLayout />
      </ThemeProvider>
    </>
  );
});

export default App;
