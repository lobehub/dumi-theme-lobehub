import { apiHeaderSel, flattenSidebarSel, logoSel, tokenSel } from './selectors';

export { initialState } from './initialState';
export * from './selectors';
export * from './useSiteStore';
export * from './useThemeStore';

/**
 * @title 数据选择器
 */
export const siteSelectors = {
  /**
   * @title API 头部选择器
   */
  apiHeader: apiHeaderSel,
  /**
   * @title 扁平化侧边栏选择器
   */
  flattenSidebar: flattenSidebarSel,
  logo: logoSel,
  token: tokenSel,
};
