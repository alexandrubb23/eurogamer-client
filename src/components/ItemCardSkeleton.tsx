import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const ItemCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height='190px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default ItemCardSkeleton;
