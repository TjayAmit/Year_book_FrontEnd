import { useMemo, useState } from 'react';
import { Box, TableComponent, Flex, Heading, Button } from '../../Packages';
import { UserData } from '../Component/SampleData';

const User = () => {
  const [search, setSearch] = useState('');
  const [fetch, setFetch] = useState(false);
  const [close, setClose] = useState(false);

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
        accessor: 'name',
      },
      {
        Header: 'ROLE',
        accessor: 'role',
      },
      {
        Header: 'ACTION',
        accessor: 'action',
      },
    ],
    []
  );

  const AddModal = () => {};

  const HandleAdd = () => {
    console.log('awwww');
    setClose(true);
  };
  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'#120e63'}>
            User
          </Heading>
        </Flex>
      </Box>

      <TableComponent
        columns={column}
        data={UserData}
        search={search}
        setSearch={setSearch}
        placeholder={'Search name'}
        button={'User'}
        ModalBody={<AddModal />}
        AddNew={HandleAdd}
        callBack={callBack}
        close={close}
        setClose={setClose}
      />
    </Box>
  );
};

export default User;
