import { createStaticStyles } from 'antd-style';

/**
 * 静态 stylish 工具函数
 * 用于 createStaticStyles 中替代动态 stylish
 */
const _lobeStaticStylish = createStaticStyles(({ css, cssVar }) => ({
  buttonDefaultHover: css`
    transition: all 0.2s;

    &:hover {
      background: ${cssVar.colorFillTertiary};
    }

    &:active {
      background: ${cssVar.colorFill};
    }
  `,
  resetLinkColor: css`
    color: ${cssVar.colorText};
    text-decoration: none;

    &:hover {
      color: ${cssVar.colorPrimary};
    }
  `,
}));

export const lobeStaticStylish = {
  buttonDefaultHover: _lobeStaticStylish.buttonDefaultHover,
  resetLinkColor: _lobeStaticStylish.resetLinkColor,
};
