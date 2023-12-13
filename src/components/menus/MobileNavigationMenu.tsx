import { HamburgerIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorModeSwitch from '@/components/ColorModeSwitch';
import { Page } from '@/routes';

const MobileNavigationMenu = ({ pages }: { pages: Page[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseLeave = () => setIsOpen(false);
  const handleMenuButtonClick = () => setIsOpen(!isOpen);

  return (
    <Menu isOpen={isOpen} closeOnSelect={false}>
      <MenuButton
        aria-label='Options'
        as={IconButton}
        icon={<HamburgerIcon />}
        onClick={handleMenuButtonClick}
        variant='outline'
      />
      <MenuList onMouseLeave={handleMouseLeave}>
        {pages.map(({ path, label }) => (
          <MenuItem as={Link} to={path} key={path} command='⌘T'>
            {label}
          </MenuItem>
        ))}
        <MenuItem>
          <ColorModeSwitch />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileNavigationMenu;
