'use client';

import { ConfigProvider as LobehubConfigProvider } from '@lobehub/ui';
import { ConfigProvider } from 'antd';
import { cssVar } from 'antd-style';
import * as motion from 'motion/react-m';
import { PropsWithChildren, memo } from 'react';

const Config = memo<PropsWithChildren>(({ children }) => {
  return (
    <LobehubConfigProvider motion={motion}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              contentFontSizeSM: 12,
            },
            DatePicker: {
              activeBorderColor: cssVar.colorBorder,
              hoverBorderColor: cssVar.colorBorder,
            },
            Input: {
              activeBorderColor: cssVar.colorBorder,
              hoverBorderColor: cssVar.colorBorder,
            },
            InputNumber: {
              activeBorderColor: cssVar.colorBorder,
              hoverBorderColor: cssVar.colorBorder,
            },
            Mentions: {
              activeBorderColor: cssVar.colorBorder,
              hoverBorderColor: cssVar.colorBorder,
            },
            Select: {
              activeBorderColor: cssVar.colorBorder,
              hoverBorderColor: cssVar.colorBorder,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </LobehubConfigProvider>
  );
});

export default Config;
