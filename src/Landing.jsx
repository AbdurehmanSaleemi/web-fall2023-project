import React, { useEffect } from 'react';
import GetStarted from './components/GetStarted';
import OurFeatures from './components/OurFeatures';
import FAQ from './components/Faq'
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Header from './components/Header';
import { VStack } from '@chakra-ui/react';

const Landing = () => {
  useEffect(() => {
    // get current route
    const currentRoute = window.location.pathname;
    // check if current route has any hash
    const hash = window.location.hash;
    // if hash exists, navigate to the route and remove the hash
    if (hash) {
      window.location.href = currentRoute;
    }
  }, []);
  
  return (
    <VStack
      w={'full'}
      minHeight={'100vh'}
      background={'brand.100'}
      paddingX={{ base: 3, sm: 12, md: 12, lg: 24, xl: 40, '2xl': 56 }}
      paddingY={10}
      color={'brand.500'}>
      <Header />
      <GetStarted />
      <OurFeatures />
      <Pricing />
      <FAQ />
      <Footer />
    </VStack>
  );
};

export default Landing;
