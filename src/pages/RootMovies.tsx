import type { JSX } from 'react';
import { useQuery } from '@tanstack/react-query';

import { LoadSpinner, RootMovie } from '@/components';
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
    if (!data && !isLoading) {
    content = (
      <p className="text-primary absolute top-1/2 w-full animate-pulse text-4xl text-center">
        Sorry , Failed To Fetch Movie
      </p>
    );
  }
  return <>{content}</>;
};

export default RootMovies;
