import { useState, ChangeEvent } from 'react';

export interface IUseInput {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  reset: () => void,
}

function useInput(initialValue: string): IUseInput {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(() => event.target.value);

  const reset = () => {
    setValue(() => '');
  };

  return {
    value,
    onChange,
    reset,
  };
}

export default useInput;
