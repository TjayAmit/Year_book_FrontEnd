import { useMemo, useState } from 'react';
import { Box, Flex, Heading, TableComponent } from '../../Packages';
import { InstructorData } from '../Component/SampleData';

const Instructor = () => {
  const [search, setSearch] = useState('');
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
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'#120e63'}>
            Instructor
          </Heading>
        </Flex>
      </Box>
      <TableComponent
        columns={column}
        data={InstructorData}
        search={search}
        setSearch={setSearch}
        placeholder={'Search name'}
        button={'Instructor'}
        callBack={callBack}
        close={close}
        setClose={setClose}
      />
    </Box>
  );
};

export default Instructor;
