import { Item } from '@/hooks/useNews';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const { title, thumbnail } = item;

  return (
    <Card>
      <Image src={thumbnail} alt={title} />
      <CardBody>
        <Heading fontSize='2xl'>{title}</Heading>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
