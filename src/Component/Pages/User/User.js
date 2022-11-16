<<<<<<< HEAD
import { useMemo, useState } from 'react';
import { Box, TableComponent, Flex, Heading } from '../../Packages';
import { UserData } from '../Component/SampleData';
=======
import { useMemo, useState, useEffect } from 'react';
import {
  Box,
  TableComponent,
  Flex,
  Heading,
  Button,
  Text,
  Input,
  Select,
} from '../../Packages';
// import { UserData } from '../Component/SampleData';
import useMain from '../../Context/Main/MainContext';
import { Post, Get, Put } from '../../API/Request_Format';
import { useToast } from '@chakra-ui/react';
>>>>>>> f10b2bec16d87764563de61028cbc4742c79e1ec

const User = () => {
  const toast = useToast();
  const [search, setSearch] = useState('');
  // const [fetch, setFetch] = useState(false);
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [UserData, setUserData] = useState([]);
  const [notif, setNotif] = useState(true);
  const [sort, setSort] = useState('');

  const callBack = e => {
    e.preventDefault();
  };

  const fetch_data = async () => {
    const request = await Get({
      url: 'admin/user',
      params: {},
    });

    if (request.data.status == 200) {
      setUserData(request.data.data);
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
        accessor: 'Firstname',
      },
      {
        Header: 'ROLE',
        accessor: 'UserType',
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
        Address: null,
        Section_ID: 0,
        Batch_ID: 0,
        Password: password,
        isVerified: 0,
        Section_ID: 0,
        Batch_ID: 0,
        Payment: 0,
        UserType: role,
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
        Address: null,
        Section_ID: 0,
        Batch_ID: 0,
        isVerified: 0,
        Password: password,
        Section_ID: 0,
        Batch_ID: 0,
        Payment: 0,
        UserType: role,
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

  const filter = sort
    ? UserData.filter(x => x.UserType == sort)
    : UserData.filter(
        x =>
          x.Firstname.toLowerCase().includes(search.toLowerCase()) ||
          x.Lastname.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'#120e63'}>
            User
          </Heading>
        </Flex>
      </Box>
      <Select
        width={200}
        textAlign={'center'}
        size={'sm'}
        mt={2}
        onChange={e => {
          setSort(e.target.value);
        }}
      >
        <option value={''}>-- Sort --</option>
        <option value={0}>Admin</option>
        <option value={1}>Instructor</option>
        <option value={2}>Client</option>
      </Select>
      <TableComponent
        columns={column}
        data={filter}
        search={search}
        setSearch={setSearch}
        placeholder={'Search name'}
        button={'User'}
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

export default User;
