import APIClient, { FetchResponse } from '@/services/api-client.service';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

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
    take: import.meta.env.VITE_TAKE_ITEMS,
    page: pageNumber,
  };

  return useQuery<FetchResponse<Item>, Error>({
    queryKey: [endpoint, query],
    queryFn: () =>
      apiClient.getAll(endpoint, {
        params: query,
      }),
    staleTime: ms('24h'),
  });
};

export default useData;
