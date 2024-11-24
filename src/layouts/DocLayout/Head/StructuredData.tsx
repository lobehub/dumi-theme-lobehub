import { Helmet } from 'dumi';
import isEqual from 'fast-deep-equal';
import { FC } from 'react';
import urlJoin from 'url-join';

import { siteSelectors, useSiteStore } from '@/store';

const date = new Date().toISOString();

const StructuredData: FC = () => {
  const [title, desc, logo, hostname] = useSiteStore((s) => [
    siteSelectors.siteTitle(s),
    siteSelectors.siteDesc(s),
    siteSelectors.logo(s),
    siteSelectors.hostname(s),
  ]);
  const metadata = useSiteStore(siteSelectors.metadata, isEqual);
  const host = hostname || location.origin;

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': urlJoin(host, '#website'),
        '@type': 'WebSite',
        'description': desc,
        'inLanguage': 'en-US',
        'name': 'LobeHub',
        'publisher': { '@id': urlJoin(host, '#organization') },
        'url': host,
      },
      {
        '@id': host,
        '@type': 'WebPage',
        'about': { '@id': urlJoin(host, '#organization') },
        'dateModified': date,
        'datePublished': date,
        'description': desc,
        'image': { '@id': urlJoin(host, '#primaryimage') },
        'inLanguage': 'en-US',
        'isPartOf': { '@id': urlJoin(host, '#website') },
        'name': title,
        'primaryImageOfPage': { '@id': urlJoin(host, '#primaryimage') },
        'thumbnailUrl': metadata?.twitter?.image || metadata?.openGraph?.image,
      },
      {
        '@id': urlJoin(host, '#primaryimage'),
        '@type': 'ImageObject',
        'contentUrl': metadata?.twitter?.image || metadata?.openGraph?.image || logo,
        'inLanguage': 'en-US',
        'url': metadata?.twitter?.image || metadata?.openGraph?.image || logo,
      },
      {
        '@id': urlJoin(host, '#organization'),
        '@type': 'Organization',
        'alternateName': 'LobeHub',
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'customer support',
          'email': 'support@lobehub.com',
        },
        'description':
          'We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC, and creating a technology-driven forum, fostering knowledge interaction and the exchange of ideas that may culminate in mutual inspiration and collaborative innovation.',
        'email': 'hello@lobehub.com',
        'founders': [
          { '@type': 'Person', 'name': 'Arvin Xu', 'url': 'https://github.com/arvinxx' },
          { '@type': 'Person', 'name': 'CanisMinor', 'url': 'https://github.com/arvinxx' },
        ],
        'image': 'https://lobehub.com/icon-512x512.png',
        'logo': {
          '@type': 'ImageObject',
          'height': 512,
          'url': 'https://lobehub.com/icon-512x512.png',
          'width': 512,
        },
        'name': 'LobeHub',
        'sameAs': [
          'https://x.com/lobehub',
          'https://github.com/lobehub',
          'https://medium.com/@lobehub',
          'https://www.youtube.com/@lobehub',
        ],
        'url': 'https://lobehub.com',
      },
    ],
  };

  return (
    <Helmet>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        id="structured-data"
        type="application/ld+json"
      />
    </Helmet>
  );
};
export default StructuredData;
