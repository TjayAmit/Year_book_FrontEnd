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
  const [Gender, SetGender] = useState('');
  const [Address, setAddress] = useState('');
  const [role, setRole] = useState('');

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
        Gender,
        SetGender,
        Address,
        setAddress,
        role,
        setRole,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
