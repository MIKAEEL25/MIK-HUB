export interface MovieType {
  id: string | number;
  title: string;
  poster_path: string;
  genre: string;
  release_date?: number;
  overview: string;
  vote_average?: number;
}
