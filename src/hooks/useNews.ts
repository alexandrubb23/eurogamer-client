import APIClient, { FetchResponse } from '@/services/api-client.service';
import { useQuery } from '@tanstack/react-query';

export interface Item {
  uuid: number;
  title: string;
  description: string;
  thumbnail: string;
  publisDate: string;
}

interface NewsQuery {
  page: number;
  take: number;
}

const apiClient = new APIClient<Item>('/news');

const useNews = (query: NewsQuery) =>
  useQuery<FetchResponse<Item>, Error>({
    queryKey: ['news', query],
    queryFn: () =>
      apiClient.getAll({ params: { page: query.page, take: query.take } }),
    staleTime: 1 * 60 * 1000, // 1m
  });

export default useNews;
