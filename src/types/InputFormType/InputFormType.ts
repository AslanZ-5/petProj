export interface IInputProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface ICheckboxProps {
  label: string;
  error?: string;
  touched?: boolean;
  linkLabel?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
