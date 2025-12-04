const Banner: React.FC<{
  genre: string;
  title: string;
  year: number | undefined;
  id: number | string;
}> = ({ genre, id, title, year }) => {
  return (
    <div className="absolute inset-0 flex items-end">
      <div aria-hidden="true" className="banner-shadow" />
      <div className="banner">
        <p className="text-xs sm:text-sm text-white/90 font-medium">{genre}</p>
        <div className="mt-2 flex items-center justify-between">
          <span
            className="text-sm text-white font-semibold"
            id={`movie-title-${id}`}
          >
            {title}
          </span>
          <span className="text-xs text-white/80">{year ?? ''}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
