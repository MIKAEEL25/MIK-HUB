import { useParams } from 'react-router-dom';
import Details from '../components/MovieCard/Details';
import { sampleMovies } from '../util/Dummy-movies';

const MovieDetails = () => {
  const movieId = useParams();
  const filteredlist = sampleMovies.filter(
    (movie) => movie.id === Number(movieId.movieId)
  );
  return <Details movie={filteredlist[0]} />;
};

export default MovieDetails;
