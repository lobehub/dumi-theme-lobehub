import { Meta } from '@lobehub/ui';
import { Helmet } from 'dumi';
import { memo } from 'react';

const Favicons = memo(() => {
  return (
    <Helmet>
      <Meta title={'LobeUI'} withManifest />
    </Helmet>
  );
});

export default Favicons;
