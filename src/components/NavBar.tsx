import { HStack, Image, Show } from '@chakra-ui/react';

import logo from '@/assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import NavigationMenu from './NavigationMenu';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <NavigationMenu />
      <Show above='md'>
        <ColorModeSwitch />
      </Show>
    </HStack>
  );
};

export default NavBar;
