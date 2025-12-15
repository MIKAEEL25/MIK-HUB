import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { LoadSpinner, Cast, Details } from '@/components';
import { fetchDetails, fetchCast } from '../util/http';

const MovieDetails = () => {
  const movieId = useParams();
  const {
    data: movie,
    isLoading: movieLoading,
    isSuccess: movieSuccess,
  } = useQuery({
    queryKey: ['movie', movieId.movieId],
    queryFn: () => fetchDetails(Number(movieId.movieId), 'movie'),
  });

  const { data: cast, isLoading: castLoading } = useQuery({
    queryKey: ['cast', movieId.movieId],
    queryFn: () => fetchCast(Number(movieId.movieId), 'movie'),
    enabled: movieSuccess,
  });

  let content;

  if (movieLoading || castLoading) {
    content = <LoadSpinner />;
  }
  if (movie || cast) {
    content = (
      <>
        <Details movie={movie} />
        {cast && <Cast cast={cast.cast} />}
      </>
    );
  }
  if (!movie && !cast && !movieLoading) {
    content = (
      <p className="text-primary absolute top-1/2 w-full animate-pulse text-4xl text-center">
        Sorry , Failed To Fetch Movie
      </p>
    );
  }

  return <>{content}</>;
};

export default MovieDetails;
