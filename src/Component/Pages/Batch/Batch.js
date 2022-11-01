import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Wrap,
  WrapItem,
  Text,
  Select,
  StudentProfile,
} from '../../Packages';
import { ClientData, BookData } from '../Component/SampleData';

const Batch = () => {
  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Select
            w={150}
            border={'none'}
            borderBottom={'1px solid rgba(0,0,0,0.2)'}
          >
            {BookData.map(value => {
              return <option value={value.year}>Batch {value.year}</option>;
            })}
          </Select>
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
      <Box w={'100%'} h={'100%'} mt={5} p={2}>
        <Wrap gridColumn={3} spacing={'20px'}>
          {ClientData.map(value => {
            return (
              <WrapItem key={value.id}>
                <StudentProfile
                  url={value.url}
                  name={value.name}
                  qoute={value.qoute}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </Box>
  );
};

export default Batch;
