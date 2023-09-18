import { Skeleton } from 'antd';
import { useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { Flexbox } from 'react-layout-kit';

import ContentFooter from '@/slots/ContentFooter';
import { themeConfig, useSiteStore } from '@/store';
import { DivProps } from '@/types';

import { useStyles } from './style';

const Content = memo<DivProps>(({ children, ...props }) => {
  const loading = useSiteStore((s) => s.siteData.loading);
  const { docStyle } = useSiteStore(themeConfig, isEqual);
  const { styles, cx } = useStyles(docStyle === 'pure');
  const { mobile } = useResponsive();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [loading]);

  return (
    <Flexbox gap={mobile ? 0 : 24} width={'100%'} {...props}>
      <div style={{ height: 0 }} />
      <div className={cx('dumi-antd-style-content', styles.content)}>
        <Skeleton active loading={loading} paragraph style={{ minHeight: '50vh' }} />
        <div
          style={{
            display: loading ? 'none' : undefined,
          }}
        >
          {children}
        </div>
      </div>
      <ContentFooter />
    </Flexbox>
  );
});

export default Content;
