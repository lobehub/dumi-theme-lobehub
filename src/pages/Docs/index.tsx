import { Giscus } from '@lobehub/ui';
import { useResponsive } from 'antd-style';
import { useOutlet } from 'dumi';
import { memo, useCallback, useEffect } from 'react';
import { Center } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import ApiHeader from '@/slots/ApiHeader';
import Content from '@/slots/Content';
import { giscusSel, isApiPageSel, useSiteStore } from '@/store';

import { useStyles } from './styles';

const Documents = memo(() => {
  const outlet = useOutlet();
  const { mobile } = useResponsive();
  const { isApiPage, giscus } = useSiteStore(
    (st) => ({ giscus: giscusSel(st), isApiPage: isApiPageSel(st) }),
    shallow,
  );
  const { styles } = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [location.pathname]);

  const Comment = useCallback(
    () =>
      giscus && (
        <Giscus
          category={giscus.category}
          categoryId={giscus.categoryId}
          id="lobehub"
          mapping="title"
          repo={giscus.repo}
          repoId={giscus.repoId}
        />
      ),
    [giscus, location.pathname],
  );
  return (
    <>
      <div className={styles.background} />
      <Center className={styles.content} style={{ marginBottom: 48, padding: mobile ? 0 : 24 }}>
        {isApiPage ? (
          <div style={{ padding: mobile ? 16 : 0, width: '100%' }}>
            <ApiHeader />
          </div>
        ) : undefined}
        <Content>
          {outlet}
          {giscus && <Comment />}
        </Content>
      </Center>
    </>
  );
});

export default Documents;
