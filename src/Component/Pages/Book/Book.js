import { useMemo } from 'react';
import { Box, TableComponent, Flex, Heading, Button } from '../../Packages';
import { BookData } from '../Component/SampleData';

const Book = () => {
  const column = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'YEAR',
        accessor: 'year',
      },
      {
        Header: 'BATCH',
        accessor: 'title',
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
          <Heading fontSize={32} color={'grey'}>
            Books
          </Heading>
          <Button
            bg={'#120e63'}
            color={'white'}
            _hover={{
              bg: '#120e63',
            }}
          >
            {'New Student'}
          </Button>
        </Flex>
      </Box>
      <TableComponent columns={column} data={BookData} />
    </Box>
  );
};

export default Book;
