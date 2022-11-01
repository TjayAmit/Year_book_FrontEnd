import { useMemo } from 'react';
import { Box, TableComponent, Flex, Heading, Button } from '../../Packages';
import { UserData } from '../Component/SampleData';

const User = () => {
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

  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'grey'}>
            Users
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
      <TableComponent columns={column} data={UserData} />
    </Box>
  );
};

export default User;
