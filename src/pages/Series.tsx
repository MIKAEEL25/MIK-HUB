import type { JSX } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LoadSpinner, Movie, SearchBar } from '@/components';
import { fetchSeries } from '../util/http';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@/components';

const Series = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { data, isLoading } = useQuery({
    queryKey: ['series', page],
    queryFn: () => fetchSeries(page),
  });

  let content;

  if (isLoading) {
    content = <LoadSpinner />;
  }
  if (data) {
    content = <Movie data={data.results} />;
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
    <>
      <section className="absolute top-50 left-0 text-center right-0">
        <div className="mt-0">
          <SearchBar route="series" sort="tv" />
        </div>
        <div className="w-fit m-auto mt-56">{content}</div>
        {data && <Pagination totalPages={data.total_pages} />}
      </section>
    </>
  );
};

export default Series;
