import { useMemo } from 'react';
import { Box, TableComponent } from '../../Packages';
import { InstructorData } from '../Component/SampleData';

const Instructor = () => {
  const column = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
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
        Header: 'ACTION',
        accessor: 'action',
      },
    ],
    []
  );

  return (
    <Box w={'100%'}>
      <TableComponent columns={column} data={InstructorData} />
    </Box>
  );
};

export default Instructor;
