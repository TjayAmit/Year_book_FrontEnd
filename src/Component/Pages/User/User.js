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

const User = () => {
  const toast = useToast();
  const [search, setSearch] = useState('');
  const [fetch, setFetch] = useState(false);
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState(false);

  const [notif, setNotif] = useState(true);
  const [sort, setSort] = useState('');

  const callBack = e => {
    e.preventDefault();
  };

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
      // {
      //   Header: 'ACTION',
      //   accessor: 'action',
      // },
    ],
    []
  );

  const { customUserData } = useMain();

  const filter = sort
    ? customUserData.filter(x => x.FK_role_ID == sort)
    : customUserData;

  // const filter = sort
  //   ? customUserData.filter(x => x.UserType == sort)
  //   : customUserData.filter(
  //       x =>
  //         x.aname.toLowerCase().includes(search.toLowerCase()) ||
  //         x.iname.toLowerCase().includes(search.toLowerCase())
  //     );

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
        <option value={1}>Admin</option>
        <option value={2}>Instructor</option>
        <option value={3}>Client</option>
      </Select>
      <TableComponent
        columns={column}
        data={filter}
        search={search}
        setSearch={setSearch}
        placeholder={'Search name'}
        button={'User'}
        // AddNew={HandleAdd}
        // Update={HandleUpdate}
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
