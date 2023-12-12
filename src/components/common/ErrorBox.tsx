import { Box, Flex } from '@chakra-ui/react';

const ErrorBox = ({ error }: { error: Error }) => {
  return (
    <Flex>
      <Box bgColor='gray.900' padding={'10px'} textColor='gray'>
        Error: {error.message}
      </Box>
    </Flex>
  );
};

export default ErrorBox;
