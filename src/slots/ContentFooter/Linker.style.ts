import { createStaticStyles } from 'antd-style';

export const styles = createStaticStyles(({ css, cssVar }) => ({
  alignmentEnd: css`
    justify-content: flex-end;
  `,
  container: css`
    cursor: pointer;

    min-width: 250px;
    padding: 16px 24px;
    border-radius: 8px;

    background: ${cssVar.colorBgContainer};

    &:hover {
      background: ${cssVar.colorFillTertiary};
    }
  `,
  nav: css`
    font-size: 12px;
    color: ${cssVar.colorTextTertiary};
  `,

  title: css`
    font-size: 16px;
  `,
}));
