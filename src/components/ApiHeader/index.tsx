import { Icon, Markdown, Snippet } from '@lobehub/ui';
import { Divider, Space, Typography } from 'antd';
import { useResponsive } from 'antd-style';
import { Edit3, Github } from 'lucide-react';
import { type ReactNode, memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import { ApiHeaderConfig } from '@/types';

import { useStyles } from './style';

/**
 * @title ApiHeaderProps
 * @category Props
 * @description ApiHeader 组件的 props 类型定义
 */
export interface ApiHeaderProps extends ApiHeaderConfig {
  /**
   * @title 组件名
   * @description ApiHeader 组件的名称
   */
  componentName?: string;
  /**
   * @title 是否默认导入
   * @description 是否默认导入组件
   * @default false
   */
  defaultImport?: boolean;
  /**
   * @title 描述
   * @description ApiHeader 组件的描述信息
   */
  description?: string;
  /**
   * @title 标题
   * @description ApiHeader 组件的标题
   */
  title: string;
}
/**
 * @title ApiHeader 配置项
 */

export interface ApiTitleProps extends ApiHeaderProps {
  /**
   * @title 服务列表
   * @description 可选，若存在则展示 API 服务列表
   */
  serviceList?: ServiceItem[];
  /**
   * @title 标题
   */
  title: string;
}

export interface ServiceItem {
  /**
   * @title 服务描述
   */
  children: string;
  /**
   * @title 服务图标
   */
  icon: ReactNode;
  /**
   * @title 服务标签
   */
  label: string;
  /**
   * @title 服务链接
   */
  url: string;
}

export const ApiHeader = memo<ApiTitleProps & FlexboxProps>(
  ({
    title,
    type,
    componentName,
    description,
    defaultImport,
    pkg,
    sourceUrl,
    docUrl,
    serviceList = [],
    ...rest
  }) => {
    const { styles } = useStyles();
    const { mobile } = useResponsive();
    const isDoc = type === 'doc';

    const items = [
      sourceUrl && {
        children: 'Source',
        icon: <Icon icon={Github} />,
        url: sourceUrl,
      },
      docUrl && {
        children: 'Edit',
        icon: <Icon icon={Edit3} />,
        url: docUrl,
      },
    ].filter(Boolean) as ServiceItem[];

    const importString = defaultImport
      ? `import ${componentName} from '${pkg}';`
      : `import { ${componentName} } from '${pkg}';`;

    return (
      <Flexbox id={'api-header'} style={{ marginBottom: 24 }} width={'100%'} {...rest}>
        <Typography.Title className={styles.title}>{title}</Typography.Title>
        {description && <Markdown className={styles.desc}>{description}</Markdown>}
        {!isDoc && (
          <Flexbox gap={mobile ? 16 : 24} style={{ marginTop: 16 }}>
            {componentName && (
              <div style={{ display: 'flex' }}>
                <Snippet spotlight>{importString}</Snippet>
              </div>
            )}
            <Divider dashed style={{ margin: '2px 0' }} />
            <Flexbox distribution={'space-between'} gap={mobile ? 24 : 0} horizontal={!mobile}>
              <Space split={<Divider type={'vertical'} />} wrap>
                {serviceList.map((item) => (
                  <a
                    href={item.url}
                    key={item.label}
                    rel="noreferrer"
                    target={'_blank'}
                    title={item.label}
                  >
                    <Flexbox align={'center'} className={styles.text} gap={8} horizontal>
                      {item.icon}
                      {item.children}
                    </Flexbox>
                  </a>
                ))}
              </Space>
              <Space className={styles.meta} split={<Divider type={'vertical'} />}>
                {items.map((item, index) => (
                  <a href={item.url} key={index} rel="noreferrer" target={'_blank'}>
                    <Flexbox align={'center'} className={styles.text} gap={8} horizontal>
                      {item.icon}
                      {item.children}
                    </Flexbox>
                  </a>
                ))}
              </Space>
            </Flexbox>
          </Flexbox>
        )}
      </Flexbox>
    );
  },
);
