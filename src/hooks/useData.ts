import APIClient, { FetchResponse } from '@/services/api-client.service';
import { useQuery } from '@tanstack/react-query';
import usePageQuery from './usePageQuery';

export type Endpoint = 'news' | 'videos';

export interface Item {
  uuid: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  publisDate: string;
}

const apiClient = new APIClient();

const useData = (endpoint: Endpoint) => {
  const { pageNumber } = usePageQuery();

  const query = {
    take: 10, // TODO: env variable
    page: pageNumber,
  };

  return useQuery<FetchResponse<Item>, Error>({
    queryKey: [endpoint, query],
    queryFn: () =>
      apiClient.getAll(endpoint, {
        params: query,
      }),
    staleTime: 1 * 60 * 1000, // 1m
  });
};

export default useData;
