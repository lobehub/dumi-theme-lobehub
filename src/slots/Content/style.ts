import { createStaticStyles , responsive } from 'antd-style';

export const styles = createStaticStyles(({ css, cssVar }) => ({
  content: css`
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
        border: 1px solid ${cssVar.colorInfoBorder};
        color: ${cssVar.colorInfoText};
        background: ${cssVar.colorInfoBg};
      }

      &[type='warning'] {
        border: 1px solid ${cssVar.colorWarningBorder};
        color: ${cssVar.colorWarningText};
        background: ${cssVar.colorWarningBg};
      }

      &[type='error'] {
        border: 1px solid ${cssVar.colorErrorBorder};
        color: ${cssVar.colorErrorText};
        background: ${cssVar.colorErrorBg};
      }

      &[type='success'] {
        border: 1px solid ${cssVar.colorSuccessBorder};
        color: ${cssVar.colorSuccessText};
        background: ${cssVar.colorSuccessBg};
      }
    }
  `,
  content_notPure: css`
    padding: 24px 48px;
    border-radius: ${cssVar.borderRadiusLG};
    background-color: ${cssVar.colorBgContainer};

    ${responsive.sm} {
      padding: 8px 16px;
      border-radius: 0;
    }
  `,
}));
