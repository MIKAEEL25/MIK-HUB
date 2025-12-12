import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { LoadSpinner , MovieDetails as Details } from '../components';
import { fetchMovie } from '../util/http';

const MovieDetails = () => {
  const movieId = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['movie', movieId.movieId],
    queryFn: () => fetchMovie(Number(movieId.movieId)),
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

export default MovieDetails;
