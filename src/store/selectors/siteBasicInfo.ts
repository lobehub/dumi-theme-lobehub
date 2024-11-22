import { SiteStore } from '../useSiteStore';

export const themeConfig = (s: SiteStore) => s.siteData.themeConfig;
export const siteTitleSel = (s: SiteStore) => s.siteData.themeConfig.title;

export const githubSel = (s: SiteStore) => s.siteData.themeConfig.socialLinks?.github || '';
export const discordSel = (s: SiteStore) => s.siteData.themeConfig.socialLinks?.discord || '';

export const giscusSel = (s: SiteStore) => s.siteData.themeConfig.giscus;

export const logoSel = (s: SiteStore): string => {
  const logo = s.siteData.themeConfig.logo;

  if (!logo) return logo || '';

  // 如果是 url 地址，则什么也不处理
  if (logo.startsWith('http')) return logo;

  // TODO: 如果是相对路径，则拼接上 base
  return logo;
};
