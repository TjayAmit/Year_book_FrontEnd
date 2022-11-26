import { useMemo, useState, useEffect } from 'react';
import { Box, Flex, Heading, TableComponent } from '../../Packages';
<<<<<<< HEAD
import { useToast } from '@chakra-ui/react';
import {
  SectionPostRequest,
  SectionPutRequest,
} from '../../API/Server_Request/Section_Request';
import useMain from '../../Context/Main/MainContext';
=======
>>>>>>> wLandingPage

import { Post, Get, Put } from '../../API/Request_Format';
import useMain from '../../Context/Main/MainContext';
import { useToast } from '@chakra-ui/react';
const Section = () => {
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [close, setClose] = useState(false);
  const [fetch, setFetch] = useState(false);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD

  const {
    sectionName,
    sectionDescription,
    FK_instructor_ID,
    resetStates,
    Section,
    notif,
    profileURL,
    setChangesSection,
  } = useMain();

=======
  const [sectionData, setSectionData] = useState([]);
  const [notif, setNotif] = useState(true);
  const [InstructorData, setInstructorData] = useState([]);
>>>>>>> wLandingPage
  const callBack = e => {
    e.preventDefault();
  };

  const fetch_data = async () => {
    const request = await Get({
      url: 'admin/section',
      params: {},
    });
    if (request.data.status == 200) {
      setSectionData(request.data.data);
    }

    const InstructorRequest = await Get({
      url: 'admin/user',
      params: {},
    });

    if (InstructorRequest.data.status == 200) {
      setInstructorData(
        InstructorRequest.data.data.filter(x => x.UserType == 1)
      );
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
        Header: 'SECTION',
        accessor: 'Name',
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
      {
        Header: 'Instructor',
        accessor: 'instructor',
      },
      {
        Header: 'ACTION',
        accessor: 'action',
      },
    ],
    []
  );

<<<<<<< HEAD
  const HandleAdd = async () => {
    const request = await SectionPostRequest({
      body: {
        Name: sectionName,
        Description: sectionDescription,
        FK_instructor_ID: FK_instructor_ID,
      },
    });

    if (request.data.status === 200) {
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
      setChangesSection(true);
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
    const request = await SectionPutRequest({
      params: props.id,
      body: {
        Name: sectionName,
        Description: sectionDescription,
        FK_instructor_ID: FK_instructor_ID,
=======
  const {
    sectionname,
    setSectionName,
    sectionDescription,
    setSectionDescription,
    id,
    setId,
  } = useMain();

  const HandleAdd = async () => {
    const request = await Post({
      url: 'admin/section',
      body: {
        Name: sectionname,
        Description: sectionDescription,
>>>>>>> wLandingPage
      },
    });
    if (request.data.status == 200) {
      toast({
<<<<<<< HEAD
        title: 'Account updated.',
        description: 'User Account Updated Successfully!',
=======
        title: 'Section created.',
        description: 'Section Added Successfully!',
>>>>>>> wLandingPage
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
<<<<<<< HEAD
      resetStates();
      setClose(true);
      setLoading(false);
      setFetch(true);
      setChangesSection(true);
=======
      setSectionName('');
      setSectionDescription('');
      setClose(true);
      setLoading(false);
      setFetch(true);
>>>>>>> wLandingPage
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

<<<<<<< HEAD
  const filter = Section.filter(
    x =>
      x.Name.toLowerCase().includes(search.toLowerCase()) ||
      x.instructor.toLowerCase().includes(search.toLowerCase())
  );

=======
  const HandleUpdate = async () => {
    const request = await Put({
      url: 'admin/section',
      params: id,
      body: {
        Name: sectionname,
        Description: sectionDescription,
      },
    });
    if (request.data.status == 200) {
      toast({
        title: 'Section updated.',
        description: 'Section Updated Successfully!',
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setSectionName('');
      setSectionDescription('');
      setId('');
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

  const filter = sectionData.filter(x =>
    x.Name.toLowerCase().includes(search.toLowerCase())
  );
>>>>>>> wLandingPage
  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'#120e63'}>
            Section
          </Heading>
        </Flex>
      </Box>
      <TableComponent
        columns={column}
        data={filter}
        search={search}
        setSearch={setSearch}
        placeholder={'Search name'}
        button={'Section'}
        AddNew={HandleAdd}
        Update={HandleUpdate}
        callBack={callBack}
        close={close}
        setClose={setClose}
        loading={loading}
        setLoading={setLoading}
        setFetch={setFetch}
        notif={notif}
<<<<<<< HEAD
=======
        InstructorData={InstructorData}
>>>>>>> wLandingPage
      />
    </Box>
  );
};

export default Section;
