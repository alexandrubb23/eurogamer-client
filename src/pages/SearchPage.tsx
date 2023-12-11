import { Box, Image, Text } from '@chakra-ui/react';

import reactLogo from '@/assets/react-logo.svg';

const SearchPage = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <Box>
        <Image src={reactLogo} alt='React Logo' />
      </Box>
      <Box bg='gray.900' padding='7px 10px' borderRadius='4px'>
        <Text fontStyle='italic'>
          If something is possible to any man, it is possible to you. - Marcus
          Aurelius
        </Text>
      </Box>
    </Box>
  );
};

export default SearchPage;
