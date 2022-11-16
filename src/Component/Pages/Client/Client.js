import { useMemo, useState, useEffect } from 'react';
import { Box, Flex, Heading, TableComponent } from '../../Packages';
//import { ClientData } from '../Component/SampleData';
import useMain from '../../Context/Main/MainContext';
import { Post, Get, Put } from '../../API/Request_Format';
import { useToast } from '@chakra-ui/react';
const Client = () => {
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [close, setClose] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [UserData, setUserData] = useState([]);
  const [notif, setNotif] = useState(true);
  const callBack = e => {
    e.preventDefault();
  };

  const fetch_data = async () => {
    const request = await Get({
      url: 'admin/user',
      params: {},
    });

    if (request.data.status == 200) {
      setUserData(request.data.data.filter(x => x.UserType == 2));
      setNotif(false);
    }
  };

  useEffect(() => {
    fetch_data();
    setFetch(false);
  }, [fetch]);

  const column = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'PROFILE',
        accessor: 'url',
      },
      {
        Header: 'NAME',
        accessor: 'name',
      },
      {
        Header: 'ADDRESS',
        accessor: 'Address',
      },
      {
        Header: 'SEX',
        accessor: 'Gender',
      },
      {
        Header: 'SECTION',
        accessor: 'Section_ID',
      },
      {
        Header: 'ACTION',
        accessor: 'action',
      },
    ],
    []
  );
  const {
    email,
    password,
    firstname,
    lastname,
    contact,
    setEmail,
    setPassword,
    SetFirstname,
    SetLastname,
    SetContact,
    Gender,
    SetGender,
    Address,
    setAddress,
    role,
    setRole,
    id,
  } = useMain();
  const HandleAdd = async () => {
    const request = await Post({
      url: 'admin/user',
      body: {
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        Contact: contact,
        Gender: Gender,
        Address: Address,
        Section_ID: 0,
        Batch_ID: 0,
        Password: password,
        isVerified: 0,
        Section_ID: 0,
        Batch_ID: 0,
        Payment: 0,
        UserType: 2,
        firstlogin: 0,
        url: null,
        Payment_Method: null,
      },
    });

    if (request.data.status == 200) {
      toast({
        title: 'Account created.',
        description: 'User Account Added Successfully!',
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setEmail('');
      setPassword('');
      SetFirstname('');
      SetLastname('');
      SetContact('');
      setClose(true);
      setLoading(false);
      setFetch(true);
    }

    if (request.data.status == 500) {
      toast({
        title: 'Please fill all Required fields!',
        description: 'Adding UnSuccessful.',
        position: 'top',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const HandleUpdate = async () => {
    const request = await Put({
      url: 'admin/user',
      params: id,
      body: {
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        Contact: contact,
        Gender: Gender,
        Address: Address,
        Section_ID: 0,
        Batch_ID: 0,
        isVerified: 0,
        Password: password,
        Section_ID: 0,
        Batch_ID: 0,
        Payment: 0,
        UserType: 2,
        firstlogin: 0,
        url: null,
        Payment_Method: null,
      },
    });
    if (request.data.status == 200) {
      toast({
        title: 'Account updated.',
        description: 'User Account Updated Successfully!',
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setEmail('');
      setPassword('');
      SetFirstname('');
      SetLastname('');
      SetContact('');
      setClose(true);
      setLoading(false);
      setFetch(true);
    }
    if (request.data.status == 500) {
      toast({
        title: 'Please fill all Required fields!',
        description: 'Adding UnSuccessful.',
        position: 'top',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const filter = UserData.filter(
    x =>
      x.Firstname.toLowerCase().includes(search.toLowerCase()) ||
      x.Lastname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'#120e63'}>
            Client
          </Heading>
        </Flex>
      </Box>
      <TableComponent
        columns={column}
        data={filter}
        search={search}
        setSearch={setSearch}
        placeholder={'Search client'}
        button={'Client'}
        AddNew={HandleAdd}
        Update={HandleUpdate}
        callBack={callBack}
        close={close}
        setClose={setClose}
        loading={loading}
        setLoading={setLoading}
        setFetch={setFetch}
        notif={notif}
      />
    </Box>
  );
};

export default Client;
