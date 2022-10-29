import { createContext, useState } from '../../Packges';

const MainDataContext = createContext({});

export const MainProvider = ({ children }) => {
  const [user, setUser] = useState({
    loggedIn: false,
    role: '',
    name: 'Mang Juan',
    email: 'sample@gmail.com',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <MainDataContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
      }}
    >
      {children}
    </MainDataContext.Provider>
  );
};

export default MainDataContext;
