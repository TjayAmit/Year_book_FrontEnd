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
  const [firstname, SetFirstname] = useState('');
  const [lastname, SetLastname] = useState('');
  const [contact, SetContact] = useState('');

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        firstname,
        SetFirstname,
        lastname,
        SetLastname,
        contact,
        SetContact,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
