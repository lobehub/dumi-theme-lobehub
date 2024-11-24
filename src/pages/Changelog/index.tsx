import { useResponsive } from 'antd-style';
import { useOutlet } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { Center } from 'react-layout-kit';

import { ApiHeader } from '@/components/ApiHeader';
import { useStyles } from '@/pages/Docs/styles';
import Content from '@/slots/Content';
import { siteSelectors, useSiteStore } from '@/store';

const Changelog = memo(() => {
  const outlet = useOutlet();
  const { mobile } = useResponsive();
  const repoBase = useSiteStore(siteSelectors.github);

  const { fm } = useSiteStore(
    (s) => ({
      fm: s.routeMeta.frontmatter,
    }),
    isEqual,
  );

  const { styles } = useStyles();

  useEffect(() => {
    window?.scrollTo(0, 0);
    document?.body.scrollTo(0, 0);
  }, []);

  return (
    <Center className={styles.content} padding={mobile ? 0 : 24}>
      <ApiHeader
        description={fm.description}
        docUrl={`${repoBase}/blob/master/CHANGELOG.md`}
        padding={mobile ? 16 : 0}
        sourceUrl={`${repoBase}/blob/master/CHANGELOG.md`}
        title={fm.title}
      />
      <Content className={styles.changelog}>{outlet}</Content>
    </Center>
  );
});

export default Changelog;
