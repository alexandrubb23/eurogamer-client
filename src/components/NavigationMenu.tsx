import { pages } from '@/routes';
import { HStack } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <HStack spacing='20px'>
      {pages().map(({ path, label }) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </HStack>
  );
};

export default NavigationMenu;
