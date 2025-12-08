import type { JSX } from 'react';
import { useQuery } from '@tanstack/react-query';

import { LoadSpinner, RootMovie } from '../components';
import { fetchMovies } from '../util/http';

const RootMovies = (): JSX.Element => {
  const { data, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });
  let content;
  if (isLoading) {
    content = <LoadSpinner />;
  }

  if (data) {
    content = <RootMovie data={data.results} route="movies/" />;
  }
  return <>{content}</>;
};

export default RootMovies;
