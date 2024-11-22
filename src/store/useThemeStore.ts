import type { ThemeMode } from 'antd-style';
import { persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

interface Store {
  themeMode: ThemeMode;
}
export const useThemeStore = createWithEqualityFn<Store>()(
  persist(
    () => ({
      themeMode: 'auto' as ThemeMode,
    }),
    { name: 'LOBE_DOC_STORE' },
  ),
  shallow,
);
