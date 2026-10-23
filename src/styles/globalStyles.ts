export const globalBackgroundStyles = `html, body { background: transparent; }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }

  html[data-prefers-color='light'],
  html[data-prefers-color='light'] body {
    background: transparent;
  }

  html[data-prefers-color='dark'],
  html[data-prefers-color='dark'] body {
    background: #000;
  }`;
