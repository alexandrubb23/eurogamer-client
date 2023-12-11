import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const usePageQuery = () => {
  const defaultQuery = useMemo(
    () => ({
      page: '1',
    }),
    []
  );

  const [searchParams, setSearchParams] = useSearchParams(defaultQuery);

  const getPageNumber = Number(searchParams.get('page'));
  const isInvalidNumber = isNaN(getPageNumber);

  useEffect(() => {
    if (isInvalidNumber) setSearchParams(defaultQuery);
  }, [defaultQuery, isInvalidNumber, setSearchParams]);

  const pageNumber = isInvalidNumber || getPageNumber === 0 ? 1 : getPageNumber;

  const setPage = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  return { pageNumber, setPage };
};

export default usePageQuery;
