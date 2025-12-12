export const Image: React.FC<{
  url: string;
  title: string;
  className: string;
}> = ({ url, title, className }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${url}`}
      alt={title + ' poster'}
      className={`${className}`}
      loading="lazy"
    />
  );
};

export const Banner: React.FC<{
  title: string;
  year: number | undefined;
  id: number | string;
}> = ({ id, title, year }) => {
  const dateObject = new Date(year ? year : 0);
  const fullYear = dateObject.getFullYear();
  return (
    <div className="absolute inset-0 flex items-end">
      <div aria-hidden="true" className="banner-shadow" />
      <div className="banner">
        <div className="mt-2 flex items-center justify-between">
          <span
            className="text-2xl text-white font-semibold"
            id={`movie-title-${id}`}
          >
            {title}
          </span>
          <span className="text-xl text-primary">{fullYear ?? ''}</span>
        </div>
      </div>
    </div>
  );
};

export const Detail: React.FC<{
  title: string;
  rate: number | undefined;
  votes?: number | undefined;
  year?: number;
  story: string;
  genres: string;
}> = ({ rate, title, year, story, genres, votes }) => {
  return (
    <div className="absolute left-0 top-0 w-3/4 text-left p-5">
      <h1 className="text-center text-5xl">{title}</h1>
      <p className="text-2xl p-5">
        Rate : {rate} Of <span className="text-primary">{votes}</span> Votes
      </p>
      <p className="text-2xl p-5">Release-Date : {year}</p>
      <p className="text-2xl p-5">Genres : {genres}</p>
      <p className="text-stone-500 text-2xl p-5">
        <span className="italic text-3xl text-primary">STORY : </span> {story}
      </p>
    </div>
  );
};
