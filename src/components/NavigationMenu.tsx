import { pages } from '@/routes';
import { HStack } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <HStack
      as='nav'
      spacing='20px'
      fontSize={{
        base: 'md',
        md: '2xl',
      }}
    >
      {pages.map(({ path, label }) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </HStack>
  );
};

export default NavigationMenu;
