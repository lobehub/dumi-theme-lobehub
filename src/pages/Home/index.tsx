import { PropsWithChildren, memo, useEffect } from 'react';
import { Flexbox } from 'react-layout-kit';

import Features from '@/slots/Features';
import Hero from '@/slots/Hero';

const Home = memo<PropsWithChildren>(({ children }) => {
  useEffect(() => {
    window?.scrollTo(0, 0);
    document?.body.scrollTo(0, 0);
  }, []);

  return (
    <Flexbox align={'center'} gap={64} style={{ minHeight: '64vh', padding: '64px 24px' }}>
      <Hero />
      <Features />
      {children}
    </Flexbox>
  );
});

export default Home;
