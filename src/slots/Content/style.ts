import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ cx, token, responsive, css, stylish }, isPure: boolean) => ({
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

        .markdown {
          ${stylish.markdown};
          h2,
          h3 {
            &[id^='version'] {
              color: ${token.colorText};
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            transition: all 400ms ${token.motionEaseOut};

            > a[aria-hidden]:first-child {
              float: left;

              width: 20px;
              margin-inline-start: -24px;
              padding-inline-end: 4px;

              font-size: inherit;
              line-height: inherit;
              color: ${token.colorText};
              text-align: right;

              &:hover {
                border: 0;
              }

              > .icon-link::before {
                content: '#';
                font-size: inherit;
                color: ${token.colorTextTertiary};
              }
            }

            &:hover {
              color: ${token.colorText};
            }

            &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
              visibility: hidden;
            }
          }

          ol,
          ul {
            padding-inline-start: 18px;
          }
        }
      `,
    ),
  }),
);
