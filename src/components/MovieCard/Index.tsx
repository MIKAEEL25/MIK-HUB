import type React from 'react';

export const Image: React.FC<{
  url: string;
  title: string;
  className: string;
}> = ({ url, title, className }) => {
  return (
    <img
      src={url}
      alt={title + ' poster'}
      className={`${className}`}
      loading="lazy"
    />
  );
};

export const Header: React.FC<{ title: string; genre: string }> = ({
  title,
  genre,
}) => {
  return (
    <header className="p-1 bg-stone-700">
      <h2
        className="text-sm sm:text-base font-medium text-stone-300 truncate"
        title={title}
      >
        {title}
      </h2>
      <p className="text-xs text-gray-300 mt-0.5">{genre}</p>
    </header>
  );
};

export const Banner: React.FC<{
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

export const Detail: React.FC<{
  title: string;
  vote: number | undefined;
  year?: number;
}> = ({ vote, title, year }) => {
  return (
    <div className="absolute left-0 top-0 w-3/4 text-left p-5">
      <h1 className="text-center text-5xl">{title}</h1>
      <p className="text-2xl p-5">Vote : {vote}</p>
      <p className="text-2xl p-5">Year : {year}</p>
      <p className="text-stone-500 text-2xl p-5">
        <span className="italic text-3xl text-primary">STORY</span> : Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Commodi quam
        temporibus praesentium vel fugiat aperiam dolores corrupti ipsa fugit,
        iusto natus autem alias optio, aspernatur sed eaque perferendis, tenetur
        animi tempora dolorem ratione! Delectus, labore ea libero voluptate
        adipisci eveniet impedit amet? Ipsa ullam architecto possimus obcaecati
        eos impedit consequuntur?
      </p>
    </div>
  );
};
