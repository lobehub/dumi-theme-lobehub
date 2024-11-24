import { ISidebarItem } from 'dumi/dist/client/theme-api/types';
import { merge } from 'lodash-es';

import { initialThemeConfig } from '@/store/initialState';
import { AnchorItem } from '@/types';

import { SiteStore } from '../useSiteStore';

const themeConfig = (s: SiteStore) => merge(s.siteData.themeConfig, initialThemeConfig);
const siteTitle = (s: SiteStore) => themeConfig(s).title;
const siteDesc = (s: SiteStore) => themeConfig(s).description;

const github = (s: SiteStore) => themeConfig(s).socialLinks?.github || '';
const discord = (s: SiteStore) => themeConfig(s).socialLinks?.discord || '';

const giscus = (s: SiteStore) => themeConfig(s).giscus;

const analytics = (s: SiteStore) => themeConfig(s).analytics;

const metadata = (s: SiteStore) => themeConfig(s).metadata;

const logo = (s: SiteStore): string => {
  const logo = themeConfig(s).logo;
  if (!logo) return logo || '';
  if (logo.startsWith('http')) return logo;
  return logo;
};

const token = (s: SiteStore) => {
  const fm = s.routeMeta.frontmatter;
  return merge({}, fm.token, s.siteData.themeConfig.siteToken);
};

const activePath = (s: SiteStore) => {
  if (s.location.pathname === '/') return '/';

  const item = s.navData
    .filter((index) => index.link !== '/')
    .find((index) => s.location.pathname.startsWith(String(index.activePath! || index.link)));

  return item?.activePath || item?.link || '';
};

const tocAnchorItem = (s: SiteStore) => {
  let { toc, frontmatter } = s.routeMeta;

  if (s.tabMeta?.toc) toc = s.tabMeta.toc;

  if (s.tabMeta?.frontmatter) frontmatter = s.tabMeta.frontmatter as any;

  const shouldKeepWith = (depth: number) => {
    if (!frontmatter.tocDepth) return true;

    if (typeof frontmatter.tocDepth === 'number' && frontmatter.tocDepth > depth - 1) return true;
  };

  return toc.reduce<AnchorItem[]>((result, item) => {
    if (item.depth === 2 && shouldKeepWith(2)) {
      result.push({ ...item });
    } else if (item.depth === 3 && shouldKeepWith(3)) {
      const parent = result.at(-1);

      if (parent) {
        parent.children = parent.children || [];
        parent.children.push({ ...item });
      }
    }

    return result;
  }, []);
};

const flattenSidebar = (s: SiteStore): ISidebarItem[] => {
  return s.sidebar?.map((index) => index.children).flat() || [];
};

const contentBottom = (s: SiteStore) => {
  const dataFlatten = flattenSidebar(s);
  const path = s.location.pathname;
  const currentIndex = dataFlatten.findIndex((item) => item.link === path);

  return { currentIndex, next: dataFlatten[currentIndex + 1], prev: dataFlatten[currentIndex - 1] };
};

const hostname = (s: SiteStore) => s.siteData.hostname;

export const siteSelectors = {
  activePath,
  analytics,
  contentBottom,
  discord,
  flattenSidebar,
  giscus,
  github,
  hostname,
  logo,
  metadata,
  siteDesc,
  siteTitle,
  themeConfig,
  tocAnchorItem,
  token,
};
