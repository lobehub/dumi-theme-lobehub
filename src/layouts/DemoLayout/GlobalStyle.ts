import { createGlobalStyle, cssVar } from 'antd-style';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${cssVar.colorBgLayout};
  }

  #root {
    min-height: 100vh;
    background: ${cssVar.colorBgLayout};
  }

  #nprogress {
    .bar {
      background: ${cssVar.colorText};
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
