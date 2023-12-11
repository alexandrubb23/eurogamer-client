import { Item } from '@/hooks/useNews';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card>
      <Image src={item.thumbnail} alt={item.title} />
      <CardBody>
        <Heading fontSize='2xl'>{item.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
