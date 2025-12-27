import { Block, Typography } from '@lobehub/ui';
import { Skeleton } from 'antd';
import { useResponsive , cx } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { Flexbox } from 'react-layout-kit';

import ContentFooter from '@/slots/ContentFooter';
import { siteSelectors, useSiteStore } from '@/store';
import { DivProps } from '@/types';

import { styles } from './style';

const Content = memo<DivProps>(({ children, ...props }) => {
  const loading = useSiteStore((s) => s.siteData.loading);
  const { docStyle } = useSiteStore(siteSelectors.themeConfig, isEqual);
  const isPure = docStyle === 'pure';
  const { mobile } = useResponsive();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [loading]);

  return (
    <Flexbox gap={mobile ? 0 : 24} width={'100%'} {...props}>
      <Block
        className={cx(styles.content, !isPure && styles.content_notPure)}
        shadow
        variant={'filled'}
      >
        <Skeleton active loading={loading} paragraph />
        <Typography
          headerMultiple={0.5}
          style={{
            display: loading ? 'none' : undefined,
          }}
        >
          {children}
        </Typography>
      </Block>
      <ContentFooter />
    </Flexbox>
  );
});

export default Content;
