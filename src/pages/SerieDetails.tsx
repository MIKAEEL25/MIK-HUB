import { useParams } from 'react-router-dom';
import { Cast, SerieDetails as Details, LoadSpinner } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { fetchSerie, fetchSeriesCast } from '../util/http';

const SerieDetails = () => {
  const serieId = useParams();
  const {
    data: serie,
    isLoading: serieLoading,
    isSuccess: serieSuccess,
  } = useQuery({
    queryKey: ['series', serieId.serieId],
    queryFn: () => fetchSerie(Number(serieId.serieId)),
  });

  const { data: cast, isLoading: castLoading } = useQuery({
    queryKey: ['cast', serieId.serieId],
    queryFn: () => fetchSeriesCast(Number(serieId.serieId)),
    enabled: serieSuccess,
  });

  let content;

  if (serieLoading || castLoading) {
    content = <LoadSpinner />;
  }
  if (serie || cast) {
    content = (
      <>
        <Details movie={serie}/>;
        {cast && <Cast cast={cast.cast} />}
      </>
    );
  }
  if (!serie && !cast && !serieLoading) {
    content = (
      <p className="text-primary absolute top-1/2 w-full animate-pulse text-4xl text-center">
        Sorry , Failed To Fetch Movie
      </p>
    );
  }

  return <>{content}</>;
};

export default SerieDetails;
