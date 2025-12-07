type Name = {
  name: string;
  id?: number | string;
};
export interface MovieType {
  id: string | number;
  title: string;
  poster_path: string;
  genres: Name[];
  release_date?: number;
  overview: string;
  vote_average?: number;
  vote_count?: number;
}
