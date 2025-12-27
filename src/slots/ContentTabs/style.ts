import { createStaticStyles } from 'antd-style';

const prefixCls = 'ant';
const prefix = `.${prefixCls}-tabs`;

const marginBlock = 8;

export const styles = createStaticStyles(({ css, cssVar }) => {
  return {
    cls: css`
      ${prefix}-tab + ${prefix}-tab {
        margin: 8px 4px !important;
        margin-block: ${marginBlock}px;
        padding: 0 12px !important;
      }

      ${prefix}-tab {
        color: ${cssVar.colorTextSecondary};
        transition: background-color 150ms ease-out;

        &:first-child {
          margin-block: ${marginBlock}px;
          margin-inline: 0 4px;
          padding: 4px 12px !important;
        }

        &:hover {
          border-radius: 6px;
          color: ${cssVar.colorText} !important;
          background: ${cssVar.colorFillTertiary};
        }
      }
    `,
  };
});
