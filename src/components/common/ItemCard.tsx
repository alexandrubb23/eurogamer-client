import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Item } from '@/hooks/useData';

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const { title, thumbnail, slug } = item;

  return (
    <Card>
      <Image src={thumbnail} alt={title} />
      <CardBody>
        <Heading fontSize='2xl'>
          <Link to={slug}>{title}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
