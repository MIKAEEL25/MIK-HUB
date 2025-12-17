import { Link } from 'react-router-dom';
import type { Search } from './Type';

const SearchList: React.FC<{
  data: Search[];
  route: string;
  sort: string;
}> = ({ data, sort, route }) => {
  return (
    <ul className="h-30 search-scrollbar overflow-scroll overflow-x-hidden text-center w-fit sm:w-2/4 lg:w-2/4 xl:w-4/12 m-auto p-5">
      {data.map((data: Search) => (
        <li key={data.id} className='p-1 border-b-2 border-primary text-white'>
          <Link to={`/${route}/${data.id}`}>
            {sort === 'movie' ? data.title : data.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
