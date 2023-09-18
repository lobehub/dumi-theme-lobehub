import { Features, FeaturesProps, Snippet } from '@lobehub/ui';
import { Palette, Smartphone, Zap } from 'lucide-react';
import { Center } from 'react-layout-kit';

const items: FeaturesProps['items'] = [
  {
    description:
      'Based on antd v5, custom algorithms for light and dark themes are provided by default, offering aesthetically pleasing and user-friendly options.',
    icon: Palette,
    title: 'Themeable',
  },
  {
    description:
      'This theme package adopts modern design techniques, making the documents more intuitive, readable, and user-friendly.',
    icon: Zap,
    title: 'Modern',
  },
  {
    description:
      'Well-adapted for mobile devices. With the flexible style solution based on CSSinJS, multiple layout options are easily implemented.',
    icon: Smartphone,
    title: 'Mobile-Adapted',
  },
];

export default () => {
  return (
    <Center gap={32}>
      <Center>
        <h2 style={{ fontSize: 20 }}>To install dumi-theme-lobehub, run the following command:</h2>
        <Snippet language={'bash'}>{'$ bun add dumi dumi-theme-lobehub'}</Snippet>
      </Center>
      <Features items={items} />
    </Center>
  );
};
