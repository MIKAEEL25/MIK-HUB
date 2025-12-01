import { NavLink } from 'react-router-dom';

const NavigationItems: React.FC<{ title: string }> = (props) => {
  return (
    <li className="shadow-2xl hover:shadow-primary">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'shadow-2xl shadow-primary text-primary' : undefined
        }
        to={props.title}
        end
      >
        {props.title.toUpperCase()}
      </NavLink>
    </li>
  );
};

export default NavigationItems;
