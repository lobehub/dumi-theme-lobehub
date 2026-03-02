declare module 'dumi' {
  import type { IRouteMeta } from 'dumi/dist/client/theme-api/types';

  export type { ClientLoader, History } from '@umijs/renderer-react';
  export function getRouteMetaById(id: string): IRouteMeta | Promise<IRouteMeta>;
  export {
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory,
    createSearchParams,
    generatePath,
    Helmet,
    HelmetProvider,
    Link,
    matchPath,
    matchRoutes,
    Navigate,
    NavLink,
    resolvePath,
    useLocation,
    useMatch,
    useNavigate,
    useOutlet,
    useOutletContext,
    useParams,
    useResolvedPath,
    useRoutes,
    useSearchParams,
  } from '@umijs/renderer-react';
  export { defineConfig } from 'dumi/dist';
  export * from 'dumi/dist/client/theme-api';
  export type { IApi } from 'dumi/dist/types';
  export { useIntl } from 'react-intl';
  import type { History as RouterHistory } from 'history';

  export const history: RouterHistory;
}
