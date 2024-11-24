import { siteSelectors, useSiteStore } from '@/store';

import ClarityAnalytics from './Clarity';
import GoogleAnalytics from './GoogleAnalytics';
import Plausible from './Plausible';

const Analytics = () => {
  const analytics = useSiteStore(siteSelectors.analytics);
  return (
    <>
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
    </>
  );
};

export default Analytics;
