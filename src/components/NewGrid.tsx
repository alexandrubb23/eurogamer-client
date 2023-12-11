import { Button, HStack, SimpleGrid } from '@chakra-ui/react';

import { useState } from 'react';
import ItemCard from './ItemCard';
import ItemCardContainer from './ItemCardContainer';
import ItemCardSkeleton from './ItemCardSkeleton';
import useCreateArray from '@/hooks/useCreateArray';
import useNews from '@/hooks/useNews';

const NewGrid = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useNews({ page, take: pageSize });
  const skeletons = useCreateArray(pageSize);

  if (error) return <div>failed to load</div>;

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
        padding='10px'
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
      <HStack justifyContent='space-between'>
        <Button
          onClick={e => {
            e.preventDefault();
            if (data?.meta.hasPreviousPage) setPage(page - 1);
          }}
          isDisabled={!data?.meta.hasPreviousPage}
        >
          Prev page
        </Button>
        <Button
          onClick={e => {
            e.preventDefault();
            if (data?.meta.hasNextPage) setPage(page + 1);
          }}
          isDisabled={!data?.meta.hasNextPage}
        >
          Next page
        </Button>
      </HStack>
    </>
  );
};

export default NewGrid;
