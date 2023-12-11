import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const ItemCardSkeleton = () => {
  return (
    <Card>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default ItemCardSkeleton;
