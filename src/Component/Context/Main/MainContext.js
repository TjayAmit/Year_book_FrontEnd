import { useContext } from '../../Packges';
import MainProvider from './MainProvider.js';

//Custom hooks to use context data globally
const useMain = () => {
  return useContext(MainProvider);
};

export default useMain;
