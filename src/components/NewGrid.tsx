import { SimpleGrid } from '@chakra-ui/react';

import ItemCard from './ItemCard';
import useNews from '@/hooks/useNews';

const NewGrid = () => {
  const { news } = useNews();

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
      {news.map(item => (
        <ItemCard key={item.uuid} item={item}></ItemCard>
      ))}
    </SimpleGrid>
  );
};

export default NewGrid;
