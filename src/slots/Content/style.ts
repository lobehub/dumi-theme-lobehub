import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive, css }) => ({
  content: css`
    flex: 1;

    box-sizing: border-box;
    width: 100%;
    min-height: 400px;
    margin-top: 24px;
    padding: 24px 48px;

    background-color: ${token.colorBgContainer};
    border-radius: 10px;

    &:has([data-page-tabs='true']) {
      padding-top: 8px;
    }

    ${responsive.mobile} {
      padding: 8px 16px;
      border-radius: 0;
    }

    .markdown {
      summary kbd {
        transform: unset;

        padding: unset;

        font-size: inherit;
        line-height: inherit;
        color: inherit;

        background: unset;
        border: unset;
        box-shadow: unset;
      }
    }
  `,
}));
