import { Toc as T } from '@lobehub/ui';
import { useResponsive, useTheme } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo, useEffect, useState } from 'react';

import { siteSelectors, useSiteStore } from '@/store';

const GAP = 48;

const Toc = memo(() => {
  const items = useSiteStore(siteSelectors.tocAnchorItem, isEqual);
  const { mobile } = useResponsive();
  const theme = useTheme();
  const hash = useSiteStore((s) => s.location.hash, isEqual);
  const [spacing, setSpacing] = useState<number>(GAP);

  useEffect(() => {
    const ApiTitle = document?.querySelector('#api-header');
    if (ApiTitle) setSpacing(ApiTitle.clientHeight + GAP);
  }, [hash, items]);

  if (items?.length < 1) return;

  return (
    <>
      {!mobile && <div style={{ height: spacing }} />}
      <T
        getContainer={() => document?.body}
        headerHeight={theme.headerHeight}
        isMobile={mobile}
        items={items}
        tocWidth={theme.tocWidth}
      />
    </>
  );
});

export default Toc;
