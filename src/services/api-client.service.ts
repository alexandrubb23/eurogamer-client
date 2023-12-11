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

class APIClient<T> {
  constructor(private ebdpoint: string) {
    this.ebdpoint = ebdpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.ebdpoint,
      config
    );

    return res.data;
  };

  getOne = async (id: number | string) => {
    const res = await axiosInstance.get<T>(`${this.ebdpoint}/${id}`);
    return res.data;
  };
}

export default APIClient;
