import { FC } from 'react';

const PlausibleAnalytics: FC<{
  domain: string;
  scriptBaseUrl: string;
}> = ({ domain, scriptBaseUrl }) => (
  <script data-domain={domain} defer src={`${scriptBaseUrl}/js/script.js`} />
);

export default PlausibleAnalytics;
