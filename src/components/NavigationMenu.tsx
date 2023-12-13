import { pages } from '@/routes';
import DesktopNavigationMenu from './menus/DesktopNavigationMenu';
import MobileNavigationMenu from './menus/MobileNavigationMenu';
import useDevice from '@/hooks/useDevice';

const NavigationMenu = () => {
  const { isMobile } = useDevice();

  const NavigationMenu = isMobile
    ? MobileNavigationMenu
    : DesktopNavigationMenu;

  return <NavigationMenu pages={pages} />;
};

export default NavigationMenu;
