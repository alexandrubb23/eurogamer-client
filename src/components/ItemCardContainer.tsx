import { Box } from '@chakra-ui/react';

interface ItemCardContainerProps {
  children: React.ReactNode;
}

const ItemCardContainer = ({ children }: ItemCardContainerProps) => {
  return (
    <Box
      borderRadius={10}
      overflow='hidden'
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.15s ease-in',
      }}
      width='300px'
    >
      {children}
    </Box>
  );
};

export default ItemCardContainer;
