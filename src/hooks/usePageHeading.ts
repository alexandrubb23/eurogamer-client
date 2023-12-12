import { useLocation } from 'react-router-dom';

import { pages } from '@/routes';

const usePageHeading = () => {
  const { pathname } = useLocation();
  return pages.find(page => page.path === pathname)?.label;
};

export default usePageHeading;
