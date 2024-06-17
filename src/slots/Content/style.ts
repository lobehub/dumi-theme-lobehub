import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ cx, token, responsive, css }, isPure: boolean) => ({
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
    `,
  ),
}));
