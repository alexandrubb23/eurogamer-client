import { useSearchParams } from 'react-router-dom';

const usePageQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1',
  });

  const pageNumber = Number(searchParams.get('page'));

  const setPage = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  return { pageNumber, setPage };
};

export default usePageQuery;
