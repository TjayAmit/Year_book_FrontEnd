import { useMemo } from 'react';
import { Box, TableComponent } from '../../Packages';
import { ClientData } from '../Component/SampleData';

const Client = () => {
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
      <TableComponent columns={column} data={ClientData} />
    </Box>
  );
};

export default Client;
