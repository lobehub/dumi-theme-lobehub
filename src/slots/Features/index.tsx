import { Features as F } from '@lobehub/ui/awesome';
import { useTheme } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { heroSelectors, useSiteStore } from '@/store';

const Features = memo(() => {
  const features = useSiteStore(heroSelectors.features, isEqual);
  const theme = useTheme();

  if (!features?.length) return;

  return <F items={features} maxWidth={theme.contentMaxWidth} style={{ margin: '0 16px' }} />;
});

export default Features;
