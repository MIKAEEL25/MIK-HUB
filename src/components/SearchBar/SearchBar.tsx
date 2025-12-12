import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSearch } from '../../util/http';
import SearchList from './SearchList';

const SearchBar: React.FC<{ sort: string; route: string }> = ({
  sort,
  route,
}) => {
  const [value, setValue] = useState<string>();
  const [searchTerm, setSearchTerm] = useState<string>();

  const { data, isLoading } = useQuery({
    queryKey: ['search', { searchTerm: searchTerm, sort: sort }],
    queryFn: ({ signal }) => fetchSearch({ signal, searchTerm, sort }),
    enabled: searchTerm !== undefined,
  });
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSearchTerm(value);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [value]);

  let content;
  if (isLoading) {
    content = <p className="p-4 text-2xl text-primary">Searching...</p>;
  }
  if (data) {
    content = (
      <SearchList data={data.results} route={`${route}`} sort={`${sort}`} />
    );
  }
  return (
    <div className="absolute w-full text-center">
      <form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
        <input
          // ref={searchElement}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setValue(event.target.value)
          }
          value={value}
          type="search"
          id="search-bar"
          name="search-bar"
          placeholder={`Search For ${sort.toUpperCase()}`}
          className="search-input"
        />
        {content}
      </form>
    </div>
  );
};

export default SearchBar;
