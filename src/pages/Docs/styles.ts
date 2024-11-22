import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  changelog: css`
    .markdown {
      font-size: 16px;

      h1 {
        display: none;
      }

      h2,
      h3 {
        margin-bottom: 0;
        font-size: 28px;
      }

      sup {
        color: ${token.colorTextDescription};
      }

      details {
        font-size: 14px;
      }

      summary > kbd {
        margin-left: 6px;
        padding: unset;

        font-size: inherit;
        line-height: inherit;

        background: unset;
        border: unset;
      }

      a[href='/changelog#readme-top'] {
        display: block;
        margin-bottom: 32px;
        padding-bottom: 32px;
        border-bottom: 1px solid ${token.colorBorderSecondary};

        > img {
          display: none;
        }
      }
    }
  `,
  content: css`
    width: 100%;
    max-width: ${token.contentMaxWidth}px;
    margin: 0 auto;
  `,
}));
