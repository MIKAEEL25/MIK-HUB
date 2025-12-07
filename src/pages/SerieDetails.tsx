import { useParams } from 'react-router-dom';
import { Details } from '../components';
import { useQuery } from '@tanstack/react-query';
import { fetchSerie } from '../util/http';

const SerieDetails = () => {
  const serieId = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['series', serieId.serieId],
    queryFn: () => fetchSerie(Number(serieId.serieId)),
  });
  console.log(data);

  let content;

  if (isLoading) {
    content = <p className="text-3xl text-center text-primary absolute top-30 left-1/2">Loading...</p>;
  }
  if (data) {
    content = <Details movie={data} />;
  }

  return <>{content}</>;
};

export default SerieDetails;
