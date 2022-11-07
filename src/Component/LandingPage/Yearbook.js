import React from 'react';
import '../../App.css';
import Header from '../Layouts/Header';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Center,
  Heading,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import HomeBg from '../../Asset/home-bg.png';

const Yearbook = () => {
  return (
    <div className="home-container">
      <Box w={'100%'} h={'100vh'}>
        <Flex h="auto" bg="white">
          <Header />
        </Flex>
        <Grid
          templateRows={`repeat(1, 1fr)`}
          templateColumns={`repeat(2, 1fr)`}
          columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          overflow={'hidden'}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Box
              w={'100%'}
              h={'100vh'}
              display={'flex'}
              justifyContent="center"
              p={5}
            >
              <Center>
                <Box w={'50rem'} h={'25rem'} mb="20" p={5} m={5}>
                  <Heading color={'#fff'} size="2xl" p={5}>
                    DPLMHS: Online Year Book
                  </Heading>
                  <Text as="b" fontSize="2xl" p={5} color={'#fff'}>
                    A Journey Worth Remembering!
                  </Text>
                  <Text fontSize="xl" p={5} color={'#fff'}>
                    Treasure your High School Memories!!!
                  </Text>
                  <Button
                    w={150}
                    borderRadius="100px"
                    backgroundColor="blue.300"
                    _hover={{ background: 'white' }}
                    align="center"
                  >
                    {' '}
                    Avail Now
                  </Button>
                  <Button
                    w={150}
                    m={5}
                    borderRadius="100px"
                    backgroundColor="#FCCA0C"
                    _hover={{ background: 'blue.300' }}
                    align="center"
                  >
                    {' '}
                    Learn More
                  </Button>
                </Box>
              </Center>
            </Box>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1}>
            <Box
              w={'100%'}
              h={'100vh'}
              display={'flex'}
              justifyContent="center"
            >
              <Center>
                <Box w={'30rem'} h={'25rem'} mb="20">
                  <Box h={10}></Box>
                  <Image src={HomeBg} size={60} />
                </Box>
              </Center>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};
export default Yearbook;
