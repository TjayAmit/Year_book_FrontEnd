import { createContext, useState } from 'react';

const DataContext = createContext({});

export const MainProvider = ({ children }) => {
  const [user, setUser] = useState({
    loggedIn: false,
    role: 0,
    name: 'Mang Juan',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <DataContext.Provider
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
    </DataContext.Provider>
  );
};

export default DataContext;
