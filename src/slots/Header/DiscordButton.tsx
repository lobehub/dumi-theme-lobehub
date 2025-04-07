import { ActionIcon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { type LucideIcon, createLucideIcon } from 'lucide-react';
import { memo } from 'react';

import { siteSelectors, useSiteStore } from '@/store';

const Discord: LucideIcon = createLucideIcon('Discord', [
  [
    'path',
    {
      d: 'M20.317 3.992a19.793 19.793 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037c-1.687.29-3.33.8-4.885 1.515a.07.07 0 00-.032.028C.533 8.668-.32 13.202.099 17.68a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.291.075.075 0 01.077-.01c3.928 1.792 8.18 1.792 12.062 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.128c-.599.349-1.225.647-1.873.891a.077.077 0 00-.041.107c.36.698.772 1.363 1.225 1.993a.075.075 0 00.084.029 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 00-.031-.029z',
      key: '1',
    },
  ],
  [
    'circle',
    {
      cx: '8.1',
      cy: '12.522',
      key: '2',
      r: '.9',
    },
  ],
  [
    'circle',
    {
      cx: '15.9',
      cy: '12.522',
      key: '2',
      r: '.9',
    },
  ],
]);

const useStyles = createStyles(
  ({ css }) => css`
    svg {
      overflow: visible !important;
    }
  `,
);

const DiscordButton = memo(() => {
  const inviteUrl = useSiteStore(siteSelectors.discord);
  const { styles } = useStyles();

  return inviteUrl ? (
    <a href={inviteUrl} rel="noreferrer" target={'_blank'}>
      <ActionIcon className={styles} icon={Discord} />
    </a>
  ) : undefined;
});

export default DiscordButton;
