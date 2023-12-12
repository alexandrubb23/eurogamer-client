import { SimpleGrid } from '@chakra-ui/react';

interface ItemGalleryContainerProps {
  children: React.ReactNode;
}

const ItemGalleryContainer = ({ children }: ItemGalleryContainerProps) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={5}>
    {children}
  </SimpleGrid>
);

export default ItemGalleryContainer;
