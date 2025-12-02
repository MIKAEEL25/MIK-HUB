export interface InputValues {
  name: string;
  type: string;
  inputValue: string;
  title: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}