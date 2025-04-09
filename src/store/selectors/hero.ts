import type { FeaturesProps } from '@lobehub/ui/awesome';

import { SiteStore } from '../useSiteStore';

const isHeroPage = (s: SiteStore) => s.location.pathname === '/';

const localeValue = (s: SiteStore, value: any) => {
  if (!value) return;

  if (value[s.locale.id]) return value[s.locale.id];

  return value;
};

/**
 * Hero Title 选择器
 * 选择逻辑：优先使用 hero 配置的 title， 再兜底到 themeConfig 中的 name
 */
const heroTitle = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.title ||
  // 从 hero 的 title 中选择
  localeValue(s, s.siteData.themeConfig.hero)?.title ||
  // @deprecated 1.0 正式版本移除
  // 从 hero 的 title 中选择
  localeValue(s, s.siteData.themeConfig.title) ||
  s.siteData.themeConfig.name;

/**
 * Hero description 选择器
 * 选择逻辑：优先使用 hero 配置的 description， 再兜底到 themeConfig 中的 name
 */
const heroDesc = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.description ||
  // 从 hero 的 description 中选择
  localeValue(s, s.siteData.themeConfig.hero)?.description ||
  // @deprecated 1.0 正式版本移除
  // 从 hero 的 description 中选择
  localeValue(s, s.siteData.themeConfig.description);

/**
 * Hero Action 选择器
 * 选择逻辑：优先使用 hero 配置的 actions， 再兜底到 themeConfig 中的 actions
 */
const heroActions = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.actions ||
  // 从 hero 的 actions 中选择
  localeValue(s, s.siteData.themeConfig.hero)?.actions ||
  // @deprecated 1.0 正式版本移除
  localeValue(s, s.siteData.themeConfig.actions);

/**
 * Features 选择器
 */
const features = (s: SiteStore): FeaturesProps['items'] => {
  if (!isHeroPage(s)) return [];

  return (
    localeValue(s, s.siteData.themeConfig.hero)?.features ||
    // @deprecated 1.0 正式版本移除
    localeValue(s, s.siteData.themeConfig.features) ||
    // 在themeConfig 没有配置的话，尝试兜底到 frontmatter 中的配置
    s.routeMeta.frontmatter.features ||
    []
  );
};

export const heroSelectors = {
  features,
  heroActions,
  heroDesc,
  heroTitle,
  isHeroPage,
};
