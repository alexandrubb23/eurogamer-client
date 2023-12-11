import APIClient, { FetchResponse } from '@/services/api-client.service';
import { useQuery } from '@tanstack/react-query';

export type Endpoint = 'news' | 'videos';

export interface Item {
  uuid: number;
  title: string;
  description: string;
  thumbnail: string;
  publisDate: string;
}

interface ItemQuery {
  page: number;
  take: number;
}

const apiClient = new APIClient();

const useData = (endpoint: Endpoint, query: ItemQuery) =>
  useQuery<FetchResponse<Item>, Error>({
    queryKey: [endpoint, query],
    queryFn: () =>
      apiClient.getAll(endpoint, {
        params: query,
      }),
    staleTime: 1 * 60 * 1000, // 1m
  });

export default useData;
