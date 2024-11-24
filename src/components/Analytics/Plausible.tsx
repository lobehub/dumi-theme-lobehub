import { memo } from 'react';

const PlausibleAnalytics = memo<{ domain: string; scriptBaseUrl: string }>(
  ({ domain, scriptBaseUrl }) => (
    <script data-domain={domain} defer src={`${scriptBaseUrl}/js/script.js`} />
  ),
);

export default PlausibleAnalytics;
