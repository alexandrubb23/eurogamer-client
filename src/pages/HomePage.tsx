import { Flex, Image } from '@chakra-ui/react';

import girlSvg from '@/assets/log-in-girl.svg';

const HomePage = () => {
  return (
    <Flex justifyContent='center' align='center' height='100vh'>
      <Image src={girlSvg} alt='Girl' maxWidth='800px' margin='auto' />;
    </Flex>
  );
};

export default HomePage;
