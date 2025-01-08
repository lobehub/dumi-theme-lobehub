import { BrandLoading, LobeHubText } from '@lobehub/ui/brand';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

export default memo(() => {
  return (
    <Center
      flex={1}
      height={'100%'}
      style={{
        minHeight: '50vh',
      }}
      width={'100%'}
    >
      <BrandLoading size={40} text={LobeHubText} />
    </Center>
  );
});
