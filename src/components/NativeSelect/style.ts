import { createStaticStyles, cx } from 'antd-style';

import { lobeStaticStylish } from '@/styles';

const prefixCls = 'ant';

export const styles = createStaticStyles(({ css, cssVar }) => ({
  button: cx(
    `${prefixCls}-button`,
    css`
      ${lobeStaticStylish.buttonDefaultHover}
      all: unset;

      cursor: default;
      user-select: none;

      padding: 8px;

      font-size: ${cssVar.fontSize};
      line-height: 0;
      color: ${cssVar.colorTextSecondary};

      background: ${cssVar.colorBgContainer};

      border: 1px solid ${cssVar.colorBorder};
      border-radius: ${cssVar.borderRadius};

      -webkit-tap-highlight-color: transparent;

      &:focus-visible {
        border-color: ${cssVar.colorPrimary};
        box-shadow: 0 0 0 2px ${cssVar.colorPrimaryBg};
      }
    `,
  ),
  container: cx(
    prefixCls,
    css`
      user-select: none;
      scrollbar-width: none;

      overflow-y: auto;
      overscroll-behavior: contain;

      box-sizing: border-box;
      width: 160px;
      padding: 5px;
      border: 1px solid ${cssVar.colorBorder};
      border-radius: 8px;

      font-size: ${cssVar.fontSize};

      background: ${cssVar.colorBgElevated};
      outline: 0;
      box-shadow: ${cssVar.boxShadowSecondary};

      &::-webkit-scrollbar {
        display: none;
      }
    `,
  ),
}));
