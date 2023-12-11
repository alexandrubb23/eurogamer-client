import { Button } from '@chakra-ui/react';
import React from 'react';

import usePageQuery from '@/hooks/usePageQuery';

export type Direction = 'previous' | 'next';

interface PageNavigationButtonProps {
  children: React.ReactNode;
  isNavigable: boolean;
  direction: Direction;
}

const PageNavigationButton = ({
  children,
  isNavigable,
  direction,
}: PageNavigationButtonProps) => {
  const { pageNumber, setPage } = usePageQuery();

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!isNavigable) return;

    const page = direction === 'previous' ? pageNumber - 1 : pageNumber + 1;

    setPage(page);
  };

  return (
    <Button onClick={handleButtonClick} isDisabled={!isNavigable}>
      {children}
    </Button>
  );
};

export default PageNavigationButton;
