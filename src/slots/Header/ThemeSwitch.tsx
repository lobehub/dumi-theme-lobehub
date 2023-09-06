import { ThemeSwitch as ThemeSwitchButton } from '@lobehub/ui';
import { usePrefersColor } from 'dumi';
import { memo, useEffect } from 'react';

import { useThemeStore } from '@/store/useThemeStore';

const ThemeSwitch = memo(() => {
  const themeMode = useThemeStore((s) => s.themeMode);
  const setColorMode = usePrefersColor()[2];
  useEffect(() => setColorMode(themeMode), [themeMode]);

  return (
    <ThemeSwitchButton
      onThemeSwitch={(themeMode) => {
        useThemeStore.setState({ themeMode });
      }}
      themeMode={themeMode}
    />
  );
});

export default ThemeSwitch;
