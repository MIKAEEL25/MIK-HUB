import { Link } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div className="absolute top-27 left-0 text-center right-0">
        <h1 className="text-5xl p-8">Some Thing Went Wrong</h1>
        <p className="text-3xl p-8">
          Please Go Back To
           <span className="text-primary underline">
            <Link to={'/'}>HomePage</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
