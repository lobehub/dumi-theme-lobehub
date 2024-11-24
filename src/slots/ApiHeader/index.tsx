import isEqual from 'fast-deep-equal';
import { memo, useMemo } from 'react';
import { FlexboxProps } from 'react-layout-kit';

import { ApiHeader as Header } from '@/components/ApiHeader';
import { apiHeaderSelectors, useSiteStore } from '@/store';

import BundlephobiaFilled from './BundlephobiaFilled';
import Graph from './Graph';
import NpmFilled from './NpmFilled';
import PackagePhobia from './PackagePhobia';
import Unpkg from './Unpkg';

const ApiHeader = memo<FlexboxProps>(({ ...rest }) => {
  const props = useSiteStore(apiHeaderSelectors.apiHeader, isEqual);
  const { pkg } = props;

  const packages = useMemo(() => {
    const packageURL = encodeURIComponent(String(pkg));
    return [
      {
        children: 'NPM',
        icon: <NpmFilled />,
        label: 'NPM',
        url: `https://www.npmjs.com/package/${packageURL}`,
      },
      {
        children: 'UNPKG',
        icon: <Unpkg />,
        label: 'Check package files',
        url: `https://unpkg.com/browse/${packageURL}/`,
      },
      {
        children: 'BundlePhobia',
        icon: <BundlephobiaFilled />,
        label: 'Check bundle size',
        url: `https://bundlephobia.com/package/${packageURL}`,
      },
      {
        children: 'PackagePhobia',
        icon: <PackagePhobia />,
        label: 'Check package size',
        url: `https://packagephobia.com/result?p=${packageURL}`,
      },

      {
        children: 'Anvaka Graph',
        icon: <Graph />,
        label: 'Dependence graph',
        url: `https://npm.anvaka.com/#/view/2d/${encodeURIComponent(packageURL)}`,
      },
    ];
  }, [pkg]);

  return <Header serviceList={packages} {...props} {...rest} />;
});

export default ApiHeader;
