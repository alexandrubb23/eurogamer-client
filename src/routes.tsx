import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout';
import NewsPage from './pages/NewsPage';
import SearchPage from './pages/SearchPage';
import VideosPage from './pages/VideosPage';

export type Page = {
  label: string;
  path: string;
  element: () => React.ReactNode;
};

export const pages = (): Page[] => [
  {
    label: 'News',
    path: '/news',
    element: NewsPage,
  },
  {
    label: 'Videos',
    path: '/videos',
    element: VideosPage,
  },
  {
    label: 'Search',
    path: '/search',
    element: SearchPage,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: pages().map(({ path, element: PageComponent }) => ({
      path,
      element: <PageComponent />,
    })),
  },
]);

export default router;
