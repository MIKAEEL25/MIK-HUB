import { useParams } from 'react-router-dom';
import { SerieDetails as Details, LoadSpinner } from '../components';
import { useQuery } from '@tanstack/react-query';
import { fetchSerie } from '../util/http';

const SerieDetails = () => {
  const serieId = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['series', serieId.serieId],
    queryFn: () => fetchSerie(Number(serieId.serieId)),
  });

  let content;

  if (isLoading) {
    content = <LoadSpinner />;
  }
  if (data) {
    content = <Details movie={data} />;
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

export default SerieDetails;
