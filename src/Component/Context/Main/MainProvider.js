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
  const [id, setId] = useState('');

  //Section

  const [Batch_ID, setbatchid] = useState();
  const [sectionname, setSectionName] = useState();
  const [Instructor_id, setInstructor_id] = useState();
  const [sectionDescription, setSectionDescription] = useState();

  const [SectionID, setSectionID] = useState();

  return (
    <DataContext.Provider
      value={{
        Batch_ID,
        setbatchid,
        sectionname,
        setSectionName,
        Instructor_id,
        setInstructor_id,
        sectionDescription,
        setSectionDescription,
        setSectionID,
        SectionID,
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
        id,
        setId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
