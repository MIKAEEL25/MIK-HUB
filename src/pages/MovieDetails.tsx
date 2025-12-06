import { useParams } from 'react-router-dom';
import Details from '../components/MovieCard/Details';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../util/http';

const MovieDetails = () => {
  const movieId = useParams();
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetchMovies().then((data) => {
      setShows(data);
    });
  }, []);
  const selectedMovie = shows.filter((show) => show === Number(movieId.movieId));

  return <Details movie={selectedMovie} />;
};

export default MovieDetails;
