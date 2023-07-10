import type { ThemeMode } from 'antd-style';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ThemeStore {
  themeMode: ThemeMode;
}
export const useThemeStore = create<ThemeStore>()(
  persist(
    () => ({
      themeMode: 'auto' as ThemeMode,
    }),
    { name: 'ANTD_STYLE_DOC_STORE' },
  ),
);
