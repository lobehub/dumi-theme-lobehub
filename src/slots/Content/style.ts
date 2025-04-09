import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ cx, token, responsive, css }, isPure: boolean) => ({
  content: cx(
    !isPure &&
      css`
        padding: 24px 48px;
        border-radius: ${token.borderRadiusLG}px;
        background-color: ${token.colorBgContainer};

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
          border: 1px solid ${token.colorInfoBorder};
          color: ${token.colorInfoText};
          background: ${token.colorInfoBg};
        }

        &[type='warning'] {
          border: 1px solid ${token.colorWarningBorder};
          color: ${token.colorWarningText};
          background: ${token.colorWarningBg};
        }

        &[type='error'] {
          border: 1px solid ${token.colorErrorBorder};
          color: ${token.colorErrorText};
          background: ${token.colorErrorBg};
        }

        &[type='success'] {
          border: 1px solid ${token.colorSuccessBorder};
          color: ${token.colorSuccessText};
          background: ${token.colorSuccessBg};
        }
      }
    `,
  ),
}));
