import { FC } from 'react';

const GoogleAnalytics: FC<{ measurementId: string }> = ({ measurementId }) => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${measurementId}');
`,
        }}
        id="google-analytics"
        type="text/javascript"
      />
    </>
  );
};

export default GoogleAnalytics;
