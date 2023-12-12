import { Image, SimpleGrid } from '@chakra-ui/react';

interface ItemScreenshotsProps {
  description: string;
}

const ItemScreenshots = ({ description }: ItemScreenshotsProps) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={5}>
    {/* {screenshots.map(screenshot => (
      <Image key={screenshot} src={screenshot} alt='Item screenshot' />
    ))} */}
  </SimpleGrid>
);

export default ItemScreenshots;
