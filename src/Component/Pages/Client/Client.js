import { useMemo, useState } from 'react';
import { Box, Flex, Heading, TableComponent } from '../../Packages';
import { ClientData } from '../Component/SampleData';

const Client = () => {
  const [search, setSearch] = useState('');

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
        Header: 'ADDRESS',
        accessor: 'address',
      },
      {
        Header: 'SEX',
        accessor: 'sex',
      },
      {
        Header: 'SECTION',
        accessor: 'section',
      },
      {
        Header: 'ACTION',
        accessor: 'action',
      },
    ],
    []
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
        data={ClientData}
        search={search}
        setSearch={setSearch}
        placeholder={'Search client'}
        button={'Client'}
        callBack={callBack}
      />
    </Box>
  );
};

export default Client;
