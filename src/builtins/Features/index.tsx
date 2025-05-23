import { Features } from '@lobehub/ui/awesome';
import { MoonStar, Palette, Zap } from 'lucide-react';

export default () => (
  <Features
    items={[
      {
        description:
          'Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.',
        icon: Palette,
        title: 'Themeable',
      },
      {
        description:
          'voids unnecessary styles props at runtime, making it more performant than other UI libraries.',
        icon: Zap,
        title: 'Fast',
      },
      {
        description:
          'Automatic dark mode recognition, LobeUI automatically changes the theme when detects HTML theme prop changes.',
        icon: MoonStar,
        title: 'Light & Dark UI',
      },
    ]}
  />
);
