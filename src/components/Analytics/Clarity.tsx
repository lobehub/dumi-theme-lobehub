import { memo } from 'react';

const MicrosoftClarity = memo<{ projectId: string }>(({ projectId }) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${projectId}");
                `,
      }}
      id="microsoft-clarity-init"
    />
  );
});

export default MicrosoftClarity;
