import type { FeaturesProps, HeroAction } from '@lobehub/ui/awesome';

export type ImageContainerType = 'light' | 'primary' | 'soon';

export interface HeroConfig {
  actions: HeroAction[];
  description?: string;
  features?: FeaturesProps['items'];
  title?: string;
}
