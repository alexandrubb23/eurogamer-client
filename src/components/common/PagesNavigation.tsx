import { HStack } from '@chakra-ui/react';

import PageNavigationButton from './PageNavigationButton';

interface PagesNavigationProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const PagesNavigation = ({
  hasNextPage,
  hasPreviousPage,
}: PagesNavigationProps) => {
  return (
    <HStack marginTop={4}>
      <PageNavigationButton isNavigable={hasPreviousPage} direction='previous'>
        Previous
      </PageNavigationButton>
      <PageNavigationButton isNavigable={hasNextPage} direction='next'>
        Next
      </PageNavigationButton>
    </HStack>
  );
};

export default PagesNavigation;
