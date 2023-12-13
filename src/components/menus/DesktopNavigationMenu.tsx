import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Page } from '@/routes';

const DesktopNavigationMenu = ({ pages }: { pages: Page[] }) => (
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

export default DesktopNavigationMenu;
