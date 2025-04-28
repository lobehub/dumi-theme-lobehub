import { createGlobalStyle } from 'antd-style';

const GlobalStyle = createGlobalStyle`
  #root {
    min-height: 100vh;
    background: ${({ theme }) => theme.colorBgContainerSecondary};
  }

  #nprogress {
    .bar {
      background: ${({ theme }) => theme.colorText};
    }

    .peg {
      display: none !important;
    }

    .spinner {
      display: none;
    }
  }
`;

export default GlobalStyle;
