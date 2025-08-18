'use client';

import { ConfigProvider } from 'antd';
import { useTheme } from 'antd-style';
import { PropsWithChildren, memo } from 'react';

const Config = memo<PropsWithChildren>(({ children }) => {
  const theme = useTheme();

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            contentFontSizeSM: 12,
          },
          DatePicker: {
            activeBorderColor: theme.colorBorder,
            hoverBorderColor: theme.colorBorder,
          },
          Input: {
            activeBorderColor: theme.colorBorder,
            hoverBorderColor: theme.colorBorder,
          },
          InputNumber: {
            activeBorderColor: theme.colorBorder,
            hoverBorderColor: theme.colorBorder,
          },
          Mentions: {
            activeBorderColor: theme.colorBorder,
            hoverBorderColor: theme.colorBorder,
          },
          Select: {
            activeBorderColor: theme.colorBorder,
            hoverBorderColor: theme.colorBorder,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
});

export default Config;
