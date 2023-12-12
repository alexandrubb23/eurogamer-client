import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Endpoint, Item } from './useData';
import APIClient from '@/services/api-client.service';

const apiClient = new APIClient();

const useItem = (endpoint: Endpoint, slug: string) => {
  return useQuery<Item, Error>({
    queryKey: [endpoint, slug],
    queryFn: () => apiClient.getOne(endpoint, slug),
    staleTime: ms('24h'),
  });
};

export default useItem;
