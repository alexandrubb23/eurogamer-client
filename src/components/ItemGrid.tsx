import { Box, Button, HStack, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';

import useCreateArray from '@/hooks/useCreateArray';
import useData, { Endpoint } from '@/hooks/useData';
import ItemCard from './ItemCard';
import ItemCardContainer from './ItemCardContainer';
import ItemCardSkeleton from './ItemCardSkeleton';

interface ItemGridProps {
  endpoint: Endpoint;
}

const ItemGrid = ({ endpoint }: ItemGridProps) => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const skeletons = useCreateArray(pageSize);
  const { data, isLoading } = useData(endpoint, { page, take: pageSize });

  return (
    <Box padding='10px'>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map(skeleton => (
            <ItemCardContainer key={skeleton}>
              <ItemCardSkeleton />
            </ItemCardContainer>
          ))}
        {data?.data.map(item => (
          <ItemCardContainer key={item.uuid}>
            <ItemCard item={item} />
          </ItemCardContainer>
        ))}
      </SimpleGrid>
      <HStack marginTop={4}>
        <Button
          onClick={e => {
            e.preventDefault();
            if (data?.meta.hasPreviousPage) setPage(page - 1);
          }}
          isDisabled={!data?.meta.hasPreviousPage}
        >
          Previous
        </Button>
        <Button
          onClick={e => {
            e.preventDefault();
            if (data?.meta.hasNextPage) setPage(page + 1);
          }}
          isDisabled={!data?.meta.hasNextPage}
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default ItemGrid;
