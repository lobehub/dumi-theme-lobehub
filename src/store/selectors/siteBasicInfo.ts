import { SiteStore } from '../useSiteStore';

export const themeConfig = (s: SiteStore) => s.siteData.themeConfig;
export const siteTitleSel = (s: SiteStore) => s.siteData.themeConfig.title;

export const githubSel = (s: SiteStore) => s.siteData.themeConfig.socialLinks?.github || '';
export const discordSel = (s: SiteStore) => s.siteData.themeConfig.socialLinks?.discord || '';

export const giscusSel = (s: SiteStore) => s.siteData.themeConfig.giscus;
