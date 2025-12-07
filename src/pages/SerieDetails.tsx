import { useParams } from 'react-router-dom';
import { Details, LoadSpinner } from '../components';
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

  return <>{content}</>;
};

export default SerieDetails;
