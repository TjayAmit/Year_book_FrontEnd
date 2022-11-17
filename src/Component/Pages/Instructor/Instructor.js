import { useMemo, useState, useEffect } from 'react';
import { Box, Flex, Heading, TableComponent, Text } from '../../Packages';
import useMain from '../../Context/Main/MainContext';
import { Post, Get, Put } from '../../API/Request_Format';
import { useToast } from '@chakra-ui/react';

const Instructor = () => {
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [close, setClose] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    firstname,
    middlename,
    lastname,
    role,
    email,
    password,
    profile,
    sex,
    FK_section_ID,
    resetStates,
    Instructor,
    sections,
    notif,
    profileURL,
    setChangesInstructor,
  } = useMain();

  const callBack = e => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   fetch_data();
  //   setFetch(false);
  // }, [fetch]);

  const column = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'Firstname',
      },
      {
        Header: 'Middle Name',
        accessor: 'Middlename',
      },
      {
        Header: 'Last Name',
        accessor: 'Lastname',
      },
      {
        Header: 'Gender',
        accessor: 'Sex',
      },
      {
        Header: 'Email',
        accessor: 'Email',
      },
      {
        Header: 'STATUS',
        accessor: 'isVerified',
      },
      {
        Header: 'ACTION',
        accessor: 'action',
      },
    ],
    []
  );

  const HandleAdd = async () => {
    const request = await Post({
      url: 'admin/user',
      body: {
        Email: email,
        profile: profileURL,
        Password: password,
        Firstname: firstname,
        Middlename: middlename,
        Lastname: lastname,
        Sex: sex,
        FK_section_ID: FK_section_ID,
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
      resetStates();
      setClose(true);
      setLoading(false);
      setFetch(true);
      setChangesInstructor(true);
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

  const HandleUpdate = async props => {
    const request = await Put({
      url: 'admin/user',
      params: props.id,
      body: {
        Email: email,
        role: role,
        profile: profileURL,
        Password: password,
        Firstname: firstname,
        Middlename: middlename,
        Lastname: lastname,
        Sex: sex,
        FK_section_ID: FK_section_ID,
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
      resetStates();
      setClose(true);
      setLoading(false);
      setFetch(true);
      setChangesInstructor(true);
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

  const filter = Instructor.filter(
    x =>
      x.Firstname.toLowerCase().includes(search.toLowerCase()) ||
      x.Lastname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'#120e63'}>
            Instructor
          </Heading>
        </Flex>
      </Box>

      <TableComponent
        columns={column}
        data={filter}
        search={search}
        setSearch={setSearch}
        placeholder={'Search name'}
        button={'Instructor'}
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

export default Instructor;
