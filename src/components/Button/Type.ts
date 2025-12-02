export interface ButtonType {
  disabled?: boolean;
  type?: 'reset' | 'submit' | 'button';
  children: React.ReactNode;
  onClick?: () => void;
}
