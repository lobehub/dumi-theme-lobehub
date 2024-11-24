import { Helmet } from 'dumi';
import { FC } from 'react';

import { siteSelectors, useSiteStore } from '@/store';

const Analytics: FC = () => {
  const analytics = useSiteStore(siteSelectors.analytics);
  return (
    <Helmet>
      {analytics?.googleAnalytics && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalytics.measurementId}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${analytics.googleAnalytics.measurementId}');
`,
            }}
            id="google-analytics"
            type="text/javascript"
          />
        </>
      )}
      {analytics?.clarity && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${analytics.clarity.projectId}");
                `,
          }}
          id="microsoft-clarity-init"
        />
      )}
      {analytics?.plausible && (
        <script
          data-domain={analytics.plausible.domain}
          defer
          src={`${analytics.plausible.scriptBaseUrl}/js/script.js`}
        />
      )}
    </Helmet>
  );
};

export default Analytics;
