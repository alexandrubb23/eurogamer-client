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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient.getAll().then(res => {
      setNews(res.data);
      setLoading(false);
    });
  }, []);

  return { news, isLoading };
};

export default useNews;
