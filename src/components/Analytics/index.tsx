import { Helmet } from 'dumi';
import { FC } from 'react';

import { siteSelectors, useSiteStore } from '@/store';

import ClarityAnalytics from './Clarity';
import GoogleAnalytics from './GoogleAnalytics';
import Plausible from './Plausible';

const Analytics: FC = () => {
  const analytics = useSiteStore(siteSelectors.analytics);
  return (
    <Helmet>
      {analytics?.googleAnalytics && (
        <GoogleAnalytics measurementId={analytics.googleAnalytics.measurementId} />
      )}
      {analytics?.clarity && <ClarityAnalytics projectId={analytics.clarity.projectId} />}
      {analytics?.plausible && (
        <Plausible
          domain={analytics.plausible.domain}
          scriptBaseUrl={analytics.plausible.scriptBaseUrl}
        />
      )}
    </Helmet>
  );
};

export default Analytics;
