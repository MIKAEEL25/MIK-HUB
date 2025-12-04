import React from 'react';

const Header: React.FC<{ title: string; genre: string }> = ({
  title,
  genre,
}) => {
  return (
    <header className="p-3 bg-stone-700">
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

export default Header;
