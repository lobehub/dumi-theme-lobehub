import { Avatar } from '@lobehub/ui';
import { LobeHub as SiteLogo } from '@lobehub/ui/brand';
import { Space } from 'antd';
import { useResponsive , cx } from 'antd-style';
import { Link } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { siteSelectors } from '@/store';
import { useSiteStore } from '@/store/useSiteStore';

import { styles } from './style';

const Logo = memo(() => {
  const config = useSiteStore(siteSelectors.themeConfig, isEqual);
  const locale = useSiteStore((s) => s.locale, isEqual);
  const { mobile } = useResponsive();

  return (
    config && (
      <Link className={cx(styles.root)} to={'base' in locale ? locale.base : '/'}>
        {config.logo ? (
          <Space>
            <Avatar avatar={config.logo} size={mobile ? 32 : 36} />
            {config.name}
          </Space>
        ) : (
          <SiteLogo
            extra={config.name}
            size={mobile ? 32 : 36}
            type={config.logoType || 'combine'}
          />
        )}
      </Link>
    )
  );
});

export default Logo;
