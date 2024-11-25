import { SiteThemeConfig } from '@/types';

export { siteSelectors, type SiteStore, useSiteStore } from './store';
export * from './types';
export { styles } from '@/store/initialState';

const defineThemeConfig = (config: SiteThemeConfig) => config;

module.exports = { defineThemeConfig };
