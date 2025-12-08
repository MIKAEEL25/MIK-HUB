import type { JSX } from 'react';

const SearchBar = (): JSX.Element => {
  return (
    <>
      <input
        type="search"
        id="search-bar"
        name="search-bar"
        placeholder="Search..."
        className="absolute top-7 left-100 border-2 border-primary rounded-md px-4 py-2 w-90 bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <label htmlFor="search-bar"></label>
    </>
  );
};

export default SearchBar;
