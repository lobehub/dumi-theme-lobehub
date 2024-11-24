import { Helmet } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { siteSelectors, useSiteStore } from '@/store';

const Og = memo(() => {
  const [title, desc, logo] = useSiteStore((s) => [
    siteSelectors.siteTitle(s),
    siteSelectors.siteDesc(s),
    siteSelectors.logo(s),
  ]);
  const metadata = useSiteStore(siteSelectors.metadata, isEqual);
  return (
    <Helmet>
      <title>{metadata?.title || title}</title>
      <meta content={metadata?.description || desc} name="description" />
      <meta content={metadata?.openGraph?.title || title} property="og:title" />
      <meta content={metadata?.openGraph?.description || desc} property="og:description" />
      <meta content={location.origin} property="og:url" />
      <meta content={metadata?.openGraph?.siteName} property="og:site_name" />
      <meta content="en" property="og:locale" />
      <meta content={metadata?.openGraph?.title || title} property="og:image:alt" />
      <meta content={metadata?.openGraph?.image || logo} property="og:image" />
      <meta content="website" property="og:type" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={metadata?.twitter?.site} name="twitter:site" />
      <meta content={metadata?.twitter?.site} name="twitter:creator" />
      <meta
        content={metadata?.twitter?.title || metadata?.openGraph?.title || title}
        name="twitter:title"
      />
      <meta
        content={metadata?.twitter?.description || metadata?.openGraph?.description || desc}
        name="twitter:description"
      />
      <meta
        content={metadata?.twitter?.image || metadata?.openGraph?.image || logo}
        name="twitter:image"
      />
    </Helmet>
  );
});

export default Og;
