import type { JSX } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LoadSpinner, SearchBar, Serie } from '@/components';
import { fetchSeries } from '../util/http';

const Series = (): JSX.Element => {
  const { data, isLoading } = useQuery({
    queryKey: ['series'],
    queryFn: fetchSeries,
  });

  let content;

  if (isLoading) {
    content = <LoadSpinner />;
  }
  if (data) {
    content = <Serie data={data.results} />;
  }
  console.log(data);
  if (!data && !isLoading) {
    content = (
      <p className="text-primary animate-pulse text-4xl text-center">
        Sorry , Failed To Fetch Movie
      </p>
    );
  }

  return (
    <section className="absolute top-50 left-0 text-center right-0">
      <div className='mt-0'>
        <SearchBar route='series' sort='tv' />
      </div>
      <div className="w-fit m-auto mt-56">{content}</div>
    </section>
  );
};

export default Series;
