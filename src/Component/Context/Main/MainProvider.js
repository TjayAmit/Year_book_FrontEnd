import { createContext, useState, useEffect, useInsertionEffect } from 'react';
import api from '../../API/API';
import {
  LoginRequest,
  RegisterRequest,
  LogoutRequest,
} from '../../API/Server_Request/Authentication_Request';

import {
  InstructorGetALLRequest,
  InstructorGetALLSelectionRequest,
} from '../../API/Server_Request/Instructor_Request';
import { SectionGetALLRequest } from '../../API/Server_Request/Section_Request';
import { useCookies } from 'react-cookie';

import { ActiveUserGetRequest } from '../../API/Server_Request/User_Request';

const DataContext = createContext({});

export const MainProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  const [fetch, setFetch] = useState(false);
  const [user, setUser] = useState({
    loggedIn: false,
    role: 0,
    name: 'Mang Juan',
  });

  const profileURL =
    'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vpassword, setVPassword] = useState('');
  const [firstname, SetFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, SetLastname] = useState('');
  const [sex, setSex] = useState('');
  const [role, setRole] = useState(0);
  const [profile, setProfile] = useState('');
  const [FK_section_ID, setFK_section_ID] = useState('');
  const [PK_user_ID, setPK_user_ID] = useState('');
  const [verified, setVerified] = useState('');

  const [Instructor, setInstructor] = useState([]);
  const [notif, setNotif] = useState(false);

  const [InstructorSelection, setInstructorSelection] = useState([]);

  const [Section, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');
  const [sectionDescription, setSectionDescription] = useState('');
  const [FK_instructor_ID, setFK_instructor_ID] = useState('');

  const [changesInstructor, setChangesInstructor] = useState(false);
  const [changesSection, setChangesSection] = useState(false);

  const roleSelection = [
    {
      id: 1,
      name: 'Moderator',
    },
    {
      id: 2,
      name: 'Instructor',
    },
  ];

  const sexSelection = [
    {
      id: 'Male',
      name: 'Male',
    },
    {
      id: 'Female',
      name: 'Female',
    },
  ];

  const signIn = async e => {
    e.preventDefault();

    try {
      const response = await LoginRequest({
        body: {
          Email: email,
          Password: password,
        },
      });

      if (response.data.status === 500) {
        return 'failed';
      }

      if (response.data.status === 403) {
        return 'failed';
      }

      console.log(response);
      setNotif(true);

      const reduceData = response.data.data;
      sessionStorage.setItem('token', reduceData['token']);

      setCookie('token', reduceData['token'], { path: '/' });

      setUser(reduceData);

      return 'success';
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async e => {
    e.preventDefault();

    try {
      const response = await RegisterRequest({
        body: {
          Email: email,
          role: role,
          profile: profileURL,
          Password: password,
          Firstname: firstname,
          Middlename: middlename,
          Lastname: lastname,
          Sex: sex,
        },
      });

      if (response.data.status === 500) {
        return 'failed';
      }

      if (response.data.status === 404) {
        return 'failed';
      }

      return 'success';
    } catch (err) {
      console.log(err);
    }
  };

  const resetStates = () => {
    setEmail('');
    setPassword('');
    setVPassword('');
    SetFirstname('');
    setMiddlename('');
    SetLastname('');
    setSex('');
    setRole(0);
    setFK_section_ID('');
  };

  const checkServerConnection = async () => {
    try {
      await api.get('http://localhost:8000/sanctum/csrf-cookie');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (fetch == false) {
      setFetch(true);
      checkServerConnection();
    }
  }, [fetch]);

  const fetchInstructorSelectionData = async () => {
    try {
      const response = await InstructorGetALLSelectionRequest({ params: {} });

      if (response.data.status === 500) {
        return 'failed';
      }

      if (response.data.status === 404) {
        return 'failed';
      }

      setInstructorSelection(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchInstructorData = async () => {
    try {
      const response = await InstructorGetALLRequest({ params: {} });

      if (response.data.status === 500) {
        return 'failed';
      }

      if (response.data.status === 404) {
        return 'failed';
      }

      setInstructor(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchInstructorData();
    fetchInstructorSelectionData();
    setChangesInstructor(false);
  }, [changesInstructor]);

  const fetchSectionData = async () => {
    try {
      const response = await SectionGetALLRequest();

      if (response.data.status === 500) {
        return 'failed';
      }

      if (response.data.status === 404) {
        return 'failed';
      }

      setSections(response.data.data);
      setNotif(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSectionData();
    setChangesSection(false);
  }, [changesSection]);

  const checkUser = async () => {
    try {
      const res = await ActiveUserGetRequest();
      setUser(res.data.data);
    } catch (e) {
      setUser({
        loggedIn: false,
      });
    }
  };

  const [interval, setInterval] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      checkUser();
      setInterval(5000);
    }, [interval]);
  }, [user]);

  //Section

  const [Batch_ID, setbatchid] = useState();
  const [sectionname, setSectionNameData] = useState();
  const [Instructor_id, setInstructor_id] = useState();
  const [sectionDescriptionData, setSectionDescriptionData] = useState();

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
        middlename,
        setMiddlename,
        SetLastname,
        role,
        setRole,
        vpassword,
        role,
        setRole,
        sex,
        setSex,
        profile,
        setProfile,
        setVPassword,
        PK_user_ID,
        setPK_user_ID,
        FK_section_ID,
        setFK_section_ID,
        signIn,
        signUp,
        resetStates,
        Instructor,
        notif,
        setNotif,
        Section,
        verified,
        setVerified,
        roleSelection,
        sexSelection,
        profileURL,
        sectionName,
        setSectionName,
        sectionDescription,
        setSectionDescription,
        FK_instructor_ID,
        setFK_instructor_ID,
        InstructorSelection,
        setChangesInstructor,
        setChangesSection,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
