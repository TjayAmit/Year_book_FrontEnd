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
  Grid,
  GridItem,
} from '../../Packages';
import { ClientData, BookData } from '../Component/SampleData';
import useMain from '../../Context/Main/MainContext';
import AddStudent from './AddStudent';
const Batch = () => {
  const { Section, batchData } = useMain();
  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Box mb={2}>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <Select
                border={'none'}
                borderBottom={'1px solid rgba(0,0,0,0.2)'}
              >
                <option>-- Select Batch --</option>
                {/* Batch Data */}
                {batchData.map(value => {
                  return <option value={value.id}>Batch {value.Year}</option>;
                })}
              </Select>
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
              <Select
                ml={2}
                border={'none'}
                borderBottom={'1px solid rgba(0,0,0,0.2)'}
              >
                <option>-- Select Section --</option>
                {/* Section Data */}
                {Section.map(value => {
                  return <option value={value.id}>Section {value.Name}</option>;
                })}
              </Select>
            </GridItem>
          </Grid>
        </Box>
        <Flex justifyContent={'space-between'}>
          <AddStudent />
        </Flex>
      </Box>
      <Box w={'100%'} h={'100%'} mt={5} p={2}>
        <Wrap gridColumn={3} spacing={'20px'}>
          {/* Student Data */}
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
