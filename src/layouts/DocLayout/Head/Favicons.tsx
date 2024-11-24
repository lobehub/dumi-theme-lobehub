import { Helmet } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { siteSelectors, useSiteStore } from '@/store';

const Favicons = memo(() => {
  const [title, logo] = useSiteStore((s) => [siteSelectors.siteTitle(s), siteSelectors.logo(s)]);
  const metadata = useSiteStore(siteSelectors.metadata, isEqual);
  return (
    <Helmet>
      <link href={metadata?.icons?.apple || logo} rel="apple-touch-icon" sizes="180x180" />
      <link href={metadata?.icons?.shortcut || logo} rel="icon" sizes="32x32" type="image/png" />
      <link href={metadata?.icons?.shortcut || logo} rel="shortcut icon" type="image/x-icon" />
      {metadata?.manifest && <link href={metadata?.manifest} rel="manifest" />}
      <meta content={title} name="apple-mobile-web-app-title" />
      <meta content={title} name="application-name" />
      <meta content="#f8f8f8" media="(prefers-color-scheme: light)" name="theme-color" />
      <meta content="#000" media="(prefers-color-scheme: dark)" name="theme-color" />
    </Helmet>
  );
});

export default Favicons;
