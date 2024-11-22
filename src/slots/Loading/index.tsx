import { Icon } from '@lobehub/ui';
import { Typography } from 'antd';
import { LoaderCircle } from 'lucide-react';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

export default memo(() => {
  return (
    <Center flex={1} height={'100%'} width={'100%'}>
      <Flexbox align={'center'} gap={8}>
        <div>
          <Icon icon={LoaderCircle} size={'large'} spin />
        </div>
        <Typography.Text type={'secondary'}>Loading...</Typography.Text>
      </Flexbox>
    </Center>
  );
});
