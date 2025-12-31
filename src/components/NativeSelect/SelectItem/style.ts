import { createStaticStyles, cx } from 'antd-style';

const prefixCls = 'ant';

export const styles = createStaticStyles(({ css, cssVar }) => ({
  active: cx(
    `${prefixCls}-item-active`,
    css`
      background: ${cssVar.colorFillTertiary};
    `,
  ),
  item: cx(
    `${prefixCls}-item`,

    css`
      all: unset;

      user-select: none;
      scroll-margin: 50px;

      display: block;

      box-sizing: inherit;
      width: 100%;
      padding: 12px 10px;
      border-radius: 5px;

      font-family: ${cssVar.fontFamily};
      font-weight: normal;
      line-height: 1;
      color: ${cssVar.colorText};

      background: transparent;

      &:hover {
        background: ${cssVar.colorFillTertiary};
      }
    `,
  ),
  selected: cx(
    `${prefixCls}-item-selected`,
    css`
      font-weight: bold;
      color: ${cssVar.colorPrimaryText};
      background: ${cssVar.colorPrimaryBg};

      &:hover {
        color: ${cssVar.colorPrimaryTextHover};
        background: ${cssVar.colorPrimaryBgHover};
      }
    `,
  ),
}));
