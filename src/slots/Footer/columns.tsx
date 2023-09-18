import { Icon } from '@lobehub/ui';
import { Link } from 'dumi';
import { Bug, FileClock, GitFork, Github } from 'lucide-react';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';

interface GetColumnParameters {
  github?: string;
}
export const getColumns = ({ github }: GetColumnParameters) => {
  const resources: FooterColumn = {
    items: [
      {
        description: 'AIGC Components',
        openExternal: true,
        title: 'Lobe UI',
        url: 'https://github.com/lobehub/lobe-ui',
      },
      {
        description: 'Awesome lint configs',
        openExternal: true,
        title: 'Lobe Lint',
        url: 'https://github.com/lobehub/lobe-chat',
      },
      {
        description: 'Lobe Dumi Theme',
        openExternal: true,
        title: 'Dsigned for Dumi 2',
        url: 'https://github.com/lobehub/lobe-flow',
      },
    ],
    title: 'Resources',
  };
  const community: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Bug} size="small" />,
        openExternal: true,
        title: 'Report Bug',
        url: `${github}/issues/new/choose`,
      },
      github && {
        icon: <Icon icon={GitFork} size="small" />,
        openExternal: true,
        title: 'Request Feature',
        url: `${github}/issues/new/choose`,
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: 'Community',
  };

  const help: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Github} size="small" />,
        openExternal: true,
        title: 'GitHub',
        url: github,
      },
      {
        LinkComponent: Link,
        icon: <Icon icon={FileClock} size="small" />,
        title: 'Changelog',
        url: '/changelog',
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: 'Help',
  };

  const more: FooterColumn = {
    items: [
      {
        description: 'OpenAI Chat Bot',
        openExternal: true,
        title: '🤖 Lobe Chat',
        url: 'https://github.com/lobehub/lobe-chat',
      },
      {
        description: 'Stable Diffusion Extension',
        openExternal: true,
        title: '🤯 Lobe Theme',
        url: 'https://github.com/lobehub/sd-webui-lobe-theme',
      },
      {
        description: 'Gen intelligently',
        openExternal: true,
        title: '📝 Readme Generator',
        url: 'https://ui.lobehub.com',
      },
      {
        description: 'AI Commit CLI',
        openExternal: true,
        title: '💌 Lobe Commit',
        url: 'https://github.com/lobehub/lobe-commit',
      },
      {
        description: 'AI i18n CLI',
        openExternal: true,
        title: '🌐 Lobe i18n',
        url: 'https://github.com/lobehub/lobe-commit',
      },
    ],
    title: 'More Products',
  };

  return [resources, community, help, more];
};
