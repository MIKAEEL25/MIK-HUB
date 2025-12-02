import type { JSX } from 'react';
import type { InputValues } from './Types';

const Inputs = ({
  name,
  type,
  inputValue,
  title,
  handleChange,
}: InputValues): JSX.Element => {
  return (
    <div className="relative z-0 w-full mb-8 group ">
      <input
        type={type}
        name={name}
        id={name}
        className="input"
        placeholder=" "
        onChange={handleChange}
        value={inputValue}
        required
      />
      <label
        htmlFor={name}
        className=""
      >
        {title}
      </label>
    </div>
  );
};

export default Inputs;
