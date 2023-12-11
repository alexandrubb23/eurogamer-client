import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  data: T[];
  meta: {
    page: number;
    take: number;
    itemsCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_EUROGAMER_API_URL,
});

class APIClient {
  getAll = async <T>(endpoint: string, config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(endpoint, config);
    return res.data;
  };

  getOne = async <T>(endpoint: string, id: number | string) => {
    const res = await axiosInstance.get<T>(`${endpoint}/${id}`);
    return res.data;
  };
}

export default APIClient;
