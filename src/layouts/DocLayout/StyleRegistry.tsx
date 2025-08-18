'use client';

import { StyleProvider, extractStaticStyle } from 'antd-style';
import { PropsWithChildren } from 'react';

// @ts-ignore
global.__ANTD_CACHE__ = extractStaticStyle.cache;

const StyleRegistry = ({ children }: PropsWithChildren) => {
  return (
    <StyleProvider cache={extractStaticStyle.cache} speedy={process.env.NODE_ENV === 'production'}>
      {children}
    </StyleProvider>
  );
};

export default StyleRegistry;
