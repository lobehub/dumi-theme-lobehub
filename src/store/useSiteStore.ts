import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { SiteStore, initialState } from './initialState';

export const useSiteStore = create<SiteStore>()(
  devtools(() => initialState, { name: 'dumi-theme-lobehub' }),
);

export * from './initialState';
