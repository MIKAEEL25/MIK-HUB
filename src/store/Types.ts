type Name = {
  name: string;
  id?: number | string;
};

export interface FavoriteType {
  id: string | number;
  title?: string;
  name?: string;
  poster_path: string;
  genres: Name[];
  release_date?: number;
  first_air_date?: number;
  overview: string;
  vote_average?: number;
  vote_count?: number;
}


export interface LoginState {
  isLogin: boolean;
}

export interface UserName {
  uName: string | null;
}