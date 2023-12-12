import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import ItemCard from './ItemCard';
import ItemCardContainer from './ItemCardContainer';
import ItemCardSkeleton from './ItemCardSkeleton';
import PagesNavigation from './PagesNavigation';
import useCreateArray from '@/hooks/useCreateArray';
import useData, { Endpoint } from '@/hooks/useData';
import usePageHeading from '@/hooks/usePageHeading';

interface ItemGridProps {
  endpoint: Endpoint;
}

const ItemGrid = ({ endpoint }: ItemGridProps) => {
  const pageSize = import.meta.env.VITE_LIMIT_ITEMS_PER_PAGE;
  const skeletons = useCreateArray(pageSize);

  const { data, isLoading } = useData(endpoint);
  const pageHeading = usePageHeading();

  if (!data) return null;

  const { meta, results = [] } = data;
  const { hasNextPage = false, hasPreviousPage = false } = meta;

  return (
    <Box padding='10px'>
      <Heading as='h1' size='lg' marginBottom='10px'>
        {pageHeading}
      </Heading>
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
        {results.map(item => (
          <ItemCardContainer key={item.uuid}>
            <ItemCard item={item} />
          </ItemCardContainer>
        ))}
      </SimpleGrid>
      <PagesNavigation
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
      />
    </Box>
  );
};

export default ItemGrid;
