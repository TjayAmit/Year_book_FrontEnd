import { createContext, useState } from '../../Packages';

const MainDataContext = createContext({});

export const MainProvider = ({ children }) => {
  const [user, setUser] = useState({
    loggedIn: false,
    role: 0,
    name: 'Mang Juan',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <MainDataContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </MainDataContext.Provider>
  );
};

export default MainDataContext;
