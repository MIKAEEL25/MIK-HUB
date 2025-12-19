type Name = {
  name: string;
  id?: number | string;
};

export interface AllMovie {
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

export interface CastType {
  id: string | number;
  name: string;
  character: string;
  profile_path: string;
}

export interface ImageType {
  url: string;
  title?: string;
  className: string;
}

export interface BannerType {
  title?: string;
  name?: string;
  year: number | undefined;
  id: number | string;
}

export interface DetailsType {
  title?: string;
  rate: number | undefined;
  votes?: number | undefined;
  year?: number;
  story: string;
  genres: string;
}
