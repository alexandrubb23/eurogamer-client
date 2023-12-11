import APIClient from '@/services/api-client.service';
import { useEffect, useState } from 'react';

export interface Item {
  uuid: number;
  title: string;
  description: string;
  thumbnail: string;
  publisDate: string;
}

const apiClient = new APIClient<Item>('/news');

const useNews = () => {
  const [news, setNews] = useState<Item[]>([]);

  useEffect(() => {
    apiClient.getAll().then(res => setNews(res.data));
  }, []);

  return { news };
};

export default useNews;
