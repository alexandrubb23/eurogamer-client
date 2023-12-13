import { useBreakpointValue } from '@chakra-ui/react';

const useDevice = () => {
  const device = useBreakpointValue({
    base: 'mobile',
    md: 'tablet',
    lg: 'desktop'
  });

  const isMobile = device === 'mobile';
  const isTablet = device === 'tablet';
  const isDesktop = device === 'desktop';

  return { isMobile, isTablet, isDesktop };
};

export default useDevice;
