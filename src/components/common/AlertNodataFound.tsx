import { Alert, AlertIcon, Stack } from '@chakra-ui/react';

const AlertNodataFound = () => {
  return (
    <Stack spacing={5}>
      <Alert status='warning'>
        <AlertIcon />
        No data found
      </Alert>
    </Stack>
  );
};

export default AlertNodataFound;
