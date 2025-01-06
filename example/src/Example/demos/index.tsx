import { ActionIcon, ActionIconProps, StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import * as LucideIcon from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: ActionIconProps | any = useControls(
    {
      active: false,
      glass: false,
      icon: {
        options: LucideIcon,
        value: LucideIcon.Settings,
      },
      size: {
        options: ['large', 'normal', 'small'],
        value: 'large',
      },
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <ActionIcon {...control} />
    </StoryBook>
  );
};
