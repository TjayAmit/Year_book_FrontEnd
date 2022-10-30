import { useContext, MainProvider } from '../../Packages';

//Custom hooks to use context data globally
const useMain = () => {
  return useContext(MainProvider);
};

export default useMain;
