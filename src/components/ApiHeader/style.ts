import { createStaticStyles , responsive } from 'antd-style';

import { lobeStaticStylish } from '@/styles';

export const styles = createStaticStyles(({ css, cssVar }) => ({
  desc: css`
    font-size: ${cssVar.fontSizeLG};
    line-height: ${cssVar.lineHeightLG};
  `,
  label: css`
    width: 80px;
  `,
  meta: css``,
  text: css`
    ${lobeStaticStylish.resetLinkColor}
  `,
  title: css`
    ${responsive.sm} {
      margin-block: 0;
      font-size: 32px !important;
    }
  `,
}));
