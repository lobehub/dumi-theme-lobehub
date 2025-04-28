import { ActionIcon } from '@lobehub/ui';
import { BottomGradientButton } from '@lobehub/ui/awesome';
import { Github } from 'lucide-react';
import { memo } from 'react';
import useSWR from 'swr';

import { siteSelectors, useSiteStore } from '@/store';

const GithubButton = memo(() => {
  const repoUrl = useSiteStore(siteSelectors.github);
  const { data: githubStar } = useSWR(
    'github-star',
    async () => {
      if (!repoUrl) return 0;
      const url = repoUrl.replace('https://github.com/', 'https://api.github.com/repos/');
      const res = await fetch(url);
      if (!res.ok) return 0;
      const json = await res.json();
      return json.stargazers_count as number;
    },
    { refreshWhenOffline: false, revalidateOnFocus: false, revalidateOnReconnect: false },
  );

  if (!repoUrl) return;

  if (!githubStar)
    return (
      <a href={repoUrl} rel="noreferrer" target={'_blank'}>
        <ActionIcon icon={Github} />
      </a>
    );

  return (
    <BottomGradientButton href={repoUrl} icon={Github} rel="noreferrer" target={'_blank'}>
      {githubStar > 1000 ? (githubStar / 1000).toFixed(1) + 'K' : githubStar + ' ⭐️'}
    </BottomGradientButton>
  );
});

export default GithubButton;
