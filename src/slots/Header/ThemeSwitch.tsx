import { ThemeSwitch as ThemeSwitchButton } from '@lobehub/ui';
import type { ThemeMode } from 'antd-style';
import { usePrefersColor } from 'dumi';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { useThemeStore } from '@/store/useThemeStore';

const DISABLE_TRANSITION_STYLE =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';

const ThemeSwitch = memo(() => {
  const themeMode = useThemeStore((s) => s.themeMode);
  const setColorMode = usePrefersColor()[2];
  useEffect(() => setColorMode(themeMode), [themeMode]);

  const styleRef = useRef<HTMLStyleElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleThemeSwitch = useCallback((mode: ThemeMode) => {
    const transitionDisableDuration = 100;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (styleRef.current) {
      styleRef.current.remove();
    }

    const css = document.createElement('style');
    css.append(document.createTextNode(DISABLE_TRANSITION_STYLE));
    document.head.append(css);
    styleRef.current = css;

    useThemeStore.setState({ themeMode: mode });

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.getComputedStyle(document.body).opacity;

    timerRef.current = setTimeout(() => {
      if (styleRef.current) {
        styleRef.current.remove();
        styleRef.current = null;
      }
    }, transitionDisableDuration);
  }, []);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <ThemeSwitchButton
      key={isMounted ? 'mounted' : 'unmounted'}
      onThemeSwitch={handleThemeSwitch}
      themeMode={themeMode}
    />
  );
});

export default ThemeSwitch;
