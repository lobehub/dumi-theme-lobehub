import { createStaticStyles , responsive } from 'antd-style';

export const styles = createStaticStyles(({ css, cssVar }) => ({
  root: css`
    display: inline-flex;
    align-items: center;

    font-size: 22px;
    font-weight: 500;
    line-height: 1;
    color: ${cssVar.colorText};
    text-decoration: none;

    ${responsive.sm} {
      font-size: 18px;
    }
  `,
}));
