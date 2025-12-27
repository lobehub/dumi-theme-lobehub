import { createStaticStyles, cx , responsive } from 'antd-style';

export const styles = createStaticStyles(({ css, cssVar }) => {
  return {
    container: css`
      position: relative;

      // TODO: support search for mobile devices
      ${responsive.sm} {
        display: none;
      }
    `,
    input: css`
      box-sizing: border-box;
      width: 280px;
      height: ${cssVar.controlHeightLG};
      padding: 0;
      padding-inline: 40px 12px;
      border: 1px solid ${cssVar.colorBorder};
      border-radius: 20px;

      font-size: 14px;
      color: ${cssVar.colorTextSecondary};

      background-color: transparent;
      outline: none;

      transition: all 0.3s;

      &::input-placeholder {
        color: ${cssVar.colorTextPlaceholder};
      }

      &:focus {
        border-color: ${cssVar.colorBorderSecondary};
        background: ${cssVar.colorBgElevated};

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }
    `,
    popover: css`
      position: absolute;
      top: 100%;
      inset-inline-end: 0;

      overflow: auto;
      overscroll-behavior: contain;
      flex: 1;

      width: 540px;
      min-height: 60px;
      max-height: 400px;
      margin-top: 8px;
      border: 1px solid ${cssVar.colorBorder};
      border-radius: ${cssVar.borderRadiusLG};

      background-color: ${cssVar.colorBgElevated};
      box-shadow: ${cssVar.boxShadow};

      -webkit-overflow-scrolling: touch;

      .dumi-default-search-result {
        > dl {
          > dt {
            color: ${cssVar.colorText};
            background: ${cssVar.colorFillTertiary};
          }

          > dd {
            > a {
              > h4 {
                color: ${cssVar.colorTextSecondary};
              }

              > p {
                color: ${cssVar.colorTextDescription};
              }

              &:hover {
                background: ${cssVar.colorFillSecondary};
              }
            }

            + dd {
              border-color: ${cssVar.colorBorderSecondary};
            }
          }
        }

        mark {
          color: #000;
          background: ${cssVar.yellow9};
        }
      }
    `,

    shortcut: cx(
      'site-header-shortcut',
      css`
        pointer-events: none;

        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        transform: translateY(-50%);

        display: inline-block;

        padding: 4px 8px;
        border: 1px solid ${cssVar.colorBorderSecondary};
        border-radius: 11px;

        font-size: 12px;
        line-height: 1;
        color: ${cssVar.colorTextDescription};
        white-space: nowrap;

        background-color: ${cssVar.colorFillSecondary};

        transition: all 0.3s;

        ${responsive.sm} {
          display: none;
        }
      `,
    ),
    svg: cx(css`
      position: absolute;
      top: 50%;
      inset-inline-start: 16px;
      transform: translateY(-50%);

      width: 16px;
      margin-top: 1px;

      color: ${cssVar.colorTextPlaceholder};
    `),
  };
});
