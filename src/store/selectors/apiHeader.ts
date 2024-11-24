import type { ApiHeaderProps } from '../../components/ApiHeader';
import type { ApiHeaderConfig } from '../../types/config';
import type { SiteStore } from '../useSiteStore';
import { siteSelectors } from './site';

const haseUrl = (config: false | string | undefined) => {
  if (config === false) return false;

  return typeof config === 'string';
};

const isApiPage = (s: SiteStore) => {
  const fm = s.routeMeta.frontmatter;

  if (s.siteData.themeConfig.apiHeader === false || fm.apiHeader === false) return false;

  if (fm.apiHeader) return true;

  const baseMatch = ['/api', '/components', ...(s.siteData.themeConfig.apiHeader?.match || [])];

  return baseMatch.some((path) => s.location.pathname.startsWith(path));
};

const apiHeader = (s: SiteStore): ApiHeaderProps => {
  const REPO_BASE = siteSelectors.github(s);
  const fm = s.routeMeta.frontmatter;
  const localeId = s.locale.id;

  const replaceUrl = (rawString: string) => {
    return rawString
      .replace('{github}', REPO_BASE)
      .replace('{atomId}', fm.atomId || '')
      .replace('{title}', fm.title)
      .replace('{locale}', localeId);
  };

  const {
    type = 'component',
    pkg: package_ = s.siteData.pkg.name,
    sourceUrl: sourceUrlMatch,
    docUrl: documentUrlMatch,
  } = (s.siteData.themeConfig.apiHeader || {}) as ApiHeaderConfig;

  const displayPackage = fm.apiHeader?.pkg || package_;

  const componentName = fm.atomId || fm.title;

  const defaultImport = fm.apiHeader?.defaultImport || false;

  const sourceUrl =
    fm.apiHeader?.sourceUrl ||
    (haseUrl(sourceUrlMatch) ? replaceUrl(sourceUrlMatch as string) : undefined);

  const documentUrl =
    fm.apiHeader?.docUrl ||
    (haseUrl(documentUrlMatch) ? replaceUrl(documentUrlMatch as string) : undefined);

  return {
    componentName,
    defaultImport,
    description: fm.description,
    docUrl: documentUrl,
    pkg: displayPackage,
    sourceUrl,
    title: fm.title,
    type,
  };
};

export const apiHeaderSelectors = {
  apiHeader,
  isApiPage,
};
