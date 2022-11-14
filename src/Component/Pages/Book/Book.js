import { useMemo, useState } from 'react';
import { Box, TableComponent, Flex, Heading } from '../../Packages';
import { BookData } from '../Component/SampleData';

const Book = () => {
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
        Header: 'BATCH',
        accessor: 'year',
      },
      {
        Header: 'AVAILE',
        accessor: 'availed',
      },
      {
        Header: 'MALE',
        accessor: 'male',
      },
      {
        Header: 'FEMALE',
        accessor: 'female',
      },
      {
        Header: 'GRADUATES',
        accessor: 'total',
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
            Books
          </Heading>
        </Flex>
      </Box>
      <TableComponent
        columns={column}
        data={BookData}
        search={search}
        setSearch={setSearch}
        placeholder={'Search batch'}
        button={'Batch'}
        callBack={callBack}
        close={close}
        setClose={setClose}
      />
    </Box>
  );
};

export default Book;
