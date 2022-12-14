import React from 'react';
import { VscError } from 'react-icons/vsc';
import { AiOutlineSearch } from 'react-icons/ai';
import { Box, Text, Center } from '@chakra-ui/react';

function SearchNotFound(props) {
  return (
    <div>
      <Box className="notfound" alignItems={'center'} alignContent={'center'}>
        <Center>
          <VscError style={{ fontSize: '50px', color: 'grey' }} />
        </Center>

        <Text fontSize={'17px'} color={'gray.600'}>
          Data Not Found
        </Text>
        <Box className="searchBox" w={'100px'} h={'100px'}>
          <AiOutlineSearch
            className="rotatecircle"
            style={{
              fontSize: '40px',
            }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default SearchNotFound;
