import { Box, SimpleGrid } from '@chakra-ui/react';

import useCreateArray from '@/hooks/useCreateArray';
import useData, { Endpoint } from '@/hooks/useData';
import ItemCard from './ItemCard';
import ItemCardContainer from './ItemCardContainer';
import ItemCardSkeleton from './ItemCardSkeleton';
import PagesNavigation from './PagesNavigation';

interface ItemGridProps {
  endpoint: Endpoint;
}

const ItemGrid = ({ endpoint }: ItemGridProps) => {
  const pageSize = 10;
  const skeletons = useCreateArray(pageSize);

  const { data, isLoading } = useData(endpoint);

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
      <PagesNavigation
        hasNextPage={data?.meta.hasNextPage ?? false}
        hasPreviousPage={data?.meta.hasPreviousPage ?? false}
      />
    </Box>
  );
};

export default ItemGrid;
