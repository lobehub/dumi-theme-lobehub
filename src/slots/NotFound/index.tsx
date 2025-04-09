import { FluentEmoji } from '@lobehub/ui';
import { Button } from 'antd';
import { Link, useIntl, useLocale } from 'dumi';
import type { FC } from 'react';
import { Center } from 'react-layout-kit';

const Page404: FC = () => {
  const intl = useIntl();
  const locale = useLocale();

  return (
    <Center height={'50vh'} width={'100%'}>
      <h1
        style={{
          filter: 'blur(8px)',
          fontSize: `min(${1024 / 3}px, 50vw)`,
          fontWeight: 'bolder',
          margin: 0,
          opacity: 0.12,
          position: 'absolute',
          zIndex: 0,
        }}
      >
        404
      </h1>
      <FluentEmoji emoji={'👀'} size={64} />
      <h2 style={{ fontWeight: 'bold', marginTop: '1em', textAlign: 'center' }}>
        {intl.formatMessage({ id: '404.title' })}
      </h2>
      <Link replace to={'base' in locale ? locale.base : '/'}>
        <Button type={'primary'}>{intl.formatMessage({ id: '404.back' })}</Button>
      </Link>
    </Center>
  );
};

export default Page404;
