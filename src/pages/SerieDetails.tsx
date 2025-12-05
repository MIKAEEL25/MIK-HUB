import { useParams } from 'react-router-dom';
import Details from '../components/MovieCard/Details';
import { sampleSeries } from '../util/Dummy-movies';

const SerieDetails = () => {
  const serieId = useParams();
  const filteredlist = sampleSeries.filter(
    (movie) => movie.id === Number(serieId.serieId)
  );
  return <Details movie={filteredlist[0]} />;
};

export default SerieDetails;
