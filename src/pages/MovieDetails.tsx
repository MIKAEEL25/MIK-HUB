import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Details } from '../components';
import { fetchMovie } from '../util/http';

const MovieDetails = () => {
  const movieId = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['movie', movieId.movieId],
    queryFn: () => fetchMovie(Number(movieId.movieId)),
  });

  let content;

  if (isLoading) {
    content = <p className="text-3xl text-center text-primary absolute top-30 left-1/2">Loading...</p>;
  }
  if (data) {
    content = <Details movie={data} />;
  }

  return <>{content}</>;
};

export default MovieDetails;
