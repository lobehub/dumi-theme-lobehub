import { createStaticStyles } from 'antd-style';

export const styles = createStaticStyles(({ css, cssVar }) => ({
  sidebar: css`
    margin-top: var(--lobe-header-height, 64px);
  `,
  sidebarInner: css`
    overflow: auto;
    width: 100%;
    height: 100%;
    padding: 16px;

    dl {
      margin: 0;
      padding: 0;
      line-height: 1;

      > dt {
        overflow: hidden;

        margin: 8px 0;

        font-weight: 500;
        color: ${cssVar.colorText};
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;
      }

      > dd {
        margin: 0;
        padding: 2px 0;

        > a {
          overflow: hidden;
          display: block;

          padding: 6px 12px;
          border-radius: 6px;

          font-size: ${cssVar.fontSize};
          line-height: ${cssVar.lineHeight};
          color: ${cssVar.colorTextSecondary};
          text-decoration: none;
          text-overflow: ellipsis;
          white-space: nowrap;

          transition:
            color 600ms ${cssVar.motionEaseOut},
            background-color 100ms ${cssVar.motionEaseOut};

          &:hover {
            color: ${cssVar.colorText};
            background: ${cssVar.colorFillTertiary};
          }

          &:active {
            color: ${cssVar.colorText};
            background-color: ${cssVar.colorFill};
          }

          &.active {
            color: ${cssVar.colorText};
            background-color: ${cssVar.colorFillSecondary};

            &:hover {
              color: ${cssVar.colorText};
              background: ${cssVar.colorFillSecondary};
            }

            &:active {
              color: ${cssVar.colorText};
              background-color: ${cssVar.colorFill};
            }
          }
        }
      }

      + dl {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px dashed ${cssVar.colorBorder};
      }
    }
  `,
}));
