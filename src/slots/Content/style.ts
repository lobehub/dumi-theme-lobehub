import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ cx, token, responsive, css }, isPure: boolean) => ({
  content: cx(
    !isPure &&
      css`
        padding: 24px 48px;
        background-color: ${token.colorBgContainer};
        border-radius: 10px;

        ${responsive.mobile} {
          padding: 8px 16px;
          border-radius: 0;
        }
      `,
    css`
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;

      &:has([data-page-tabs='true']) {
        padding-top: 8px;
      }

      .dumi-default-table-content {
        overflow: visible !important;
        font-size: 14px;
      }

      .dumi-default-badge {
        &:not([type]) {
          color: ${token.colorInfoText};
          background: ${token.colorInfoBg};
          border: 1px solid ${token.colorInfoBorder};
        }

        &[type='warning'] {
          color: ${token.colorWarningText};
          background: ${token.colorWarningBg};
          border: 1px solid ${token.colorWarningBorder};
        }

        &[type='error'] {
          color: ${token.colorErrorText};
          background: ${token.colorErrorBg};
          border: 1px solid ${token.colorErrorBorder};
        }

        &[type='success'] {
          color: ${token.colorSuccessText};
          background: ${token.colorSuccessBg};
          border: 1px solid ${token.colorSuccessBorder};
        }
      }
    `,
  ),
}));
