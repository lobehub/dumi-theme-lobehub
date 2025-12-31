import { createStaticStyles } from 'antd-style';

const prefixCls = 'ant';

export const styles = createStaticStyles(({ css, cssVar }) => {
  return {
    center: css`
      .dumi-default-previewer-demo {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
    container: css`
      .dumi-default-previewer {
        position: relative;

        overflow: hidden;
        display: flex;
        flex-direction: column;

        border-color: ${cssVar.colorBorderSecondary};

        background: ${cssVar.colorBgLayout};

        &-demo {
          flex: 1;
          border-top-color: ${cssVar.colorBgLayout} !important;

          > iframe {
            min-height: 600px;
            border-top: 1px solid ${cssVar.colorBorderSecondary};
          }

          &[data-iframe]::before {
            background: ${cssVar.colorFillContent};
          }
        }

        &-meta {
          flex: 1;
          border-color: ${cssVar.colorBorderSecondary};

          .${prefixCls}-highlighter {
            pre {
              border-radius: 0 !important;
            }
          }
        }

        &-actions:not(:last-child) {
          border-color: ${cssVar.colorBorderSecondary};
        }

        &-desc {
          .markdown {
            border-color: ${cssVar.colorBorderSecondary};
          }

          h5 {
            background: linear-gradient(
              to top,
              ${cssVar.colorBgContainer},
              color-mix(in srgb, ${cssVar.colorBgContainer} 95%, transparent) 50%,
              color-mix(in srgb, ${cssVar.colorBgContainer} 0%, transparent) 100%
            );

            a {
              color: ${cssVar.colorText};
            }
          }
        }

        &-tabs::after {
          border-color: ${cssVar.colorBorderSecondary};
        }
      }

      .dumi-default-tabs-tab {
        &-btn {
          color: ${cssVar.colorTextTertiary};
        }

        &-active {
          .dumi-default-tabs-tab-btn {
            color: ${cssVar.colorText};
          }
        }
      }
    `,
    left: css`
      .dumi-default-previewer {
        flex-direction: row-reverse;

        &-demo {
          width: 50%;
          border-left: 1px solid ${cssVar.colorBorderSecondary};
        }

        &-meta {
          width: 50%;
        }
      }
    `,
    nopadding: css`
      .dumi-default-previewer-demo {
        padding: 0;
      }
    `,
    pure: css`
      .dumi-default-previewer {
        margin: 0;
        padding: 0;
        border: none;
      }

      .dumi-default-previewer-demo {
        padding: 0;
      }

      .dumi-default-previewer-meta {
        display: none;
      }
    `,

    right: css`
      .dumi-default-previewer {
        flex-direction: row;

        &-demo {
          width: 50%;
          border-right: 1px solid ${cssVar.colorBorderSecondary};
        }

        &-meta {
          width: 50%;
        }
      }
    `,

    top: css`
      .dumi-default-previewer {
        flex-direction: column-reverse;

        &-meta {
          display: flex;
          flex-direction: column;
        }

        &-actions {
          order: 1;
        }

        &-desc {
          order: 2;
        }
      }
    `,
  };
});
