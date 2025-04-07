import { ActionIcon, Button } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Github } from 'lucide-react';
import { rgba } from 'polished';
import { memo } from 'react';
import useSWR from 'swr';

import { siteSelectors, useSiteStore } from '@/store';

const useStyles = createStyles(({ css, token }) => ({
  button: css`
    overflow: hidden;

    border: 1px solid ${rgba(token.colorText, 0.1)};
    border-radius: 36px !important;

    font-weight: bold;
    color: ${token.colorTextSecondary};

    transition: all 0.2s ease-in-out;

    &::before {
      content: '';

      position: absolute;
      inset-block-end: 0;

      display: block;

      width: 50%;
      height: 1px;

      opacity: 0;
      background-image: linear-gradient(to right, transparent, ${token.gold}, transparent);

      transition: all 0.2s ease-in-out;
    }

    &:hover {
      background: ${token.colorBgContainer};

      &::before {
        opacity: 1;
      }
    }
  `,
}));

const GithubButton = memo(() => {
  const { styles } = useStyles();
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
    <a href={repoUrl} rel="noreferrer" target={'_blank'}>
      <Button className={styles.button} icon={Github} shape={'round'}>
        {githubStar > 1000 ? (githubStar / 1000).toFixed(1) + 'K' : githubStar + ' ⭐️'}
      </Button>
    </a>
  );
});

export default GithubButton;
