import APIClient from '@/services/api-client.service';
import { useEffect, useState } from 'react';

interface News {
  uuid: number;
  title: string;
  description: string;
  thumbnail: string;
  publisDate: string;
}

const apiClient = new APIClient<News>('/news');

const useNews = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    apiClient.getAll().then(res => setNews(res.data));
  }, []);

  return { news };
};

export default useNews;
