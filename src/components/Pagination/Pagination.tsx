import { useSearchParams } from 'react-router-dom';
import Button from '../Button/Button';

const Pagination: React.FC<{ totalPages: number }> = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;

  const goToPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSearchParams({ page: String(newPage) });
  };

  return (
    <div className="flex items-center justify-center gap-20 m-10">
      <Button disabled={page === 1} onClick={() => goToPage(page - 1)}>
        PREVIOUS
      </Button>
      <span className="text-3xl">
        PAGE: <span className="text-3xl text-secondary">{page}</span>
      </span>
      <Button disabled={page === totalPages} onClick={() => goToPage(page + 1)}>
        NEXT
      </Button>
    </div>
  );
};

export default Pagination;
