import { createStaticStyles } from 'antd-style';

export const styles = createStaticStyles(({ css, cssVar }) => {
  return {
    actionBar: css`
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: center;

      height: 36px;
    `,
    tabs: css`
      padding: 0 12px;
      border-top: 1px dashed ${cssVar.colorBorderSecondary};
      border-bottom: 1px dashed ${cssVar.colorBorderSecondary};
      background: ${cssVar.colorBgLayout};
    `,
  };
});
