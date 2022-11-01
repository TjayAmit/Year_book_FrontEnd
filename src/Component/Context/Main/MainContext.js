import { useContext } from 'react';
import MainProvider from './MainProvider';

const useMain = () => {
  return useContext(MainProvider);
};

export default useMain;
