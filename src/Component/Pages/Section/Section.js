import { useMemo } from 'react';
import { Box, TableComponent } from '../../Packages';
import { SectionData } from '../Component/SampleData';

const Section = () => {
  const column = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'SECTION',
        accessor: 'name',
      },
      {
        Header: 'INSTRUCTOR',
        accessor: 'instructor',
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
      <TableComponent columns={column} data={SectionData} />
    </Box>
  );
};

export default Section;
