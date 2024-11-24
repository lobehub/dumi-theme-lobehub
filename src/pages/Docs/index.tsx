import { Giscus } from '@lobehub/ui';
import { useResponsive } from 'antd-style';
import { useOutlet } from 'dumi';
import { memo, useCallback, useEffect } from 'react';
import { Center } from 'react-layout-kit';

import ApiHeader from '@/slots/ApiHeader';
import Content from '@/slots/Content';
import { apiHeaderSelectors, siteSelectors, useSiteStore } from '@/store';

import { useStyles } from './styles';

const Documents = memo(() => {
  const outlet = useOutlet();
  const { mobile } = useResponsive();
  const { isApiPage, giscus } = useSiteStore((st) => ({
    giscus: siteSelectors.giscus(st),
    isApiPage: apiHeaderSelectors.isApiPage(st),
  }));
  const { styles } = useStyles();

  useEffect(() => {
    window?.scrollTo(0, 0);
    document?.body.scrollTo(0, 0);
  }, [location.pathname]);

  const Comment = useCallback(
    () =>
      giscus && (
        <div style={{ marginTop: 64 }}>
          <Giscus
            category={giscus.category}
            categoryId={giscus.categoryId}
            id="lobehub"
            mapping="title"
            repo={giscus.repo}
            repoId={giscus.repoId}
          />
        </div>
      ),
    [giscus, location.pathname],
  );
  return (
    <Center className={styles.content} style={{ marginBottom: 48, padding: mobile ? 0 : 24 }}>
      {isApiPage && <ApiHeader padding={mobile ? 16 : 0} />}
      <Content>
        {outlet}
        {giscus && <Comment />}
      </Content>
    </Center>
  );
});

export default Documents;
