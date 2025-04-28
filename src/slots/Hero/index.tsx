import { Hero as H } from '@lobehub/ui/awesome';
import { Link } from 'dumi';
import { memo } from 'react';

import { heroSelectors, useSiteStore } from '@/store';

const Hero = memo(() => {
  const [title, description, actions] = useSiteStore((s) => [
    heroSelectors.heroTitle(s),
    heroSelectors.heroDesc(s),
    heroSelectors.heroActions(s),
  ]);

  return <H Link={Link} actions={actions} description={description} title={title!} />;
});

export default Hero;
