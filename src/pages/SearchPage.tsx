import { Box, Image } from '@chakra-ui/react';

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
        Silence is golden 🤫
      </Box>
    </Box>
  );
};

export default SearchPage;
