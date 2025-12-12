import { Link } from 'react-router-dom';
import type { Search } from './Type';

const SearchList: React.FC<{
  data: Search[];
  route: string;
  sort: string;
}> = ({ data, sort, route }) => {
  return (
    <ul className="h-30 search-scrollbar overflow-scroll overflow-x-hidden text-center w-1/4 m-auto">
      {data.map((data: Search) => (
        <li key={data.id}>
          <Link to={`/${route}/${data.id}`}>
            {sort === 'movie' ? data.title : data.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
