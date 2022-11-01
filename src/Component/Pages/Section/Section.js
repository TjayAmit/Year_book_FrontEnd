import { useMemo, useState } from 'react';
import { Box, Flex, Heading, TableComponent } from '../../Packages';
import { SectionData } from '../Component/SampleData';

const Section = () => {
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
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'#120e63'}>
            Section
          </Heading>
        </Flex>
      </Box>
      <TableComponent
        columns={column}
        data={SectionData}
        search={search}
        setSearch={setSearch}
        placeholder={'Search section'}
        button={'Section'}
        callBack={callBack}
      />
    </Box>
  );
};

export default Section;
