import { SimpleGrid } from '@chakra-ui/react';

import ItemCard from './ItemCard';
import useNews from '@/hooks/useNews';
import ItemCardSkeleton from './ItemCardSkeleton';
import ItemCardContainer from './ItemCardContainer';

const NewGrid = () => {
  const { news, isLoading } = useNews();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
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
          <ItemCardContainer>
            <ItemCardSkeleton key={skeleton} />
          </ItemCardContainer>
        ))}
      {news.map(item => (
        <ItemCardContainer>
          <ItemCard key={item.uuid} item={item} />
        </ItemCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default NewGrid;
