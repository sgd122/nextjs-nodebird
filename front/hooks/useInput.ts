import { useCallback, useState } from 'react';

const useInput = (_initialValue: any) => {
  const [value, setValue] = useState(_initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
