import { Outlet, createBrowserRouter } from 'react-router-dom';
import ItemDetailPage from './components/common/ItemDetailPage';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/Layout';
import NewsPage from './pages/NewsPage';
import SearchPage from './pages/SearchPage';
import VideosPage from './pages/VideosPage';
import HomePage from './pages/HomePage';

type Page = {
  label: string;
  path: string;
};

export const pages: Page[] = [
  {
    label: 'News',
    path: '/news',
  },
  {
    label: 'Videos',
    path: '/videos',
  },
  {
    label: 'Search',
    path: '/search',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/news',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <NewsPage />,
          },
          {
            path: '/news/:slug',
            element: <ItemDetailPage />,
          },
        ],
      },
      {
        path: '/videos',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <VideosPage />,
          },
          {
            path: '/videos/:slug',
            element: <ItemDetailPage />,
          },
        ],
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
