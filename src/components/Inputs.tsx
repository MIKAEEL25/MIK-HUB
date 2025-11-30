import type { JSX } from 'react';

interface InputsValues {
  name: string;
  type: string;
  inputValue: string;
  title: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({
  name,
  type,
  inputValue,
  title,
  handleChange,
}: InputsValues): JSX.Element => {
  return (
    <div className="relative z-0 w-full mb-8 group ">
      <input
        type={type}
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer autofill:transition-colors autofill:duration-5000000"
        placeholder=" "
        onChange={handleChange}
        value={inputValue}
        required
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {title}
      </label>
    </div>
  );
};

export default Inputs;
