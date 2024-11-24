import { Hero as H } from '@lobehub/ui';
import { memo } from 'react';

import { heroSelectors, useSiteStore } from '@/store';

const Hero = memo(() => {
  const [title, description, actions] = useSiteStore((s) => [
    heroSelectors.heroTitle(s),
    heroSelectors.heroDesc(s),
    heroSelectors.heroActions(s),
  ]);

  return <H actions={actions} description={description} title={title!} />;
});

export default Hero;
