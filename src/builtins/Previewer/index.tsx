import { cx } from 'antd-style';
import { IPreviewerProps } from 'dumi/dist/client/theme-api/types';
import Previewer from 'dumi/theme-default/builtins/Previewer';

import { styles } from './style';

export interface PreviewerProps extends IPreviewerProps {
  center?: boolean;
  nopadding?: boolean;
  pure?: boolean;
}

export default ({ center, codePlacement, nopadding, pure, ...props }: PreviewerProps) => {
  return (
    <div
      className={cx(
        'ignore-markdown-style',
        styles.container,
        pure && styles.pure,
        center && styles.center,
        nopadding && styles.nopadding,
        styles[codePlacement as 'left' | 'right' | 'top'],
      )}
    >
      <Previewer {...props} />
    </div>
  );
};
