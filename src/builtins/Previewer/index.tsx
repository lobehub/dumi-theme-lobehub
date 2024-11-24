import { Typography } from '@lobehub/ui';
import { IPreviewerProps } from 'dumi/dist/client/theme-api/types';
import Previewer from 'dumi/theme-default/builtins/Previewer';

import { useStyles } from './style';

export interface PreviewerProps extends IPreviewerProps {
  center?: boolean;
  nopadding?: boolean;
  pure?: boolean;
}

export default ({ center, codePlacement, nopadding, pure, ...props }: PreviewerProps) => {
  const { styles, cx } = useStyles(pure);

  return (
    <Typography fontSize={14} headerMultiple={0.25} marginMultiple={0}>
      <div
        className={cx(
          styles.container,
          pure && styles.pure,
          center && styles.center,
          nopadding && styles.nopadding,
          styles[codePlacement as 'left' | 'right' | 'top'],
        )}
      >
        <Previewer {...props} />
      </div>
    </Typography>
  );
};
