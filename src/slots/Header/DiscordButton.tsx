import { ActionIcon } from '@lobehub/ui';
import { DiscordIcon } from '@lobehub/ui/icons';
import { memo } from 'react';

import { siteSelectors, useSiteStore } from '@/store';

const DiscordButton = memo(() => {
  const inviteUrl = useSiteStore(siteSelectors.discord);

  return inviteUrl ? (
    <a href={inviteUrl} rel="noreferrer" target={'_blank'}>
      <ActionIcon icon={DiscordIcon} />
    </a>
  ) : undefined;
});

export default DiscordButton;
