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
  Container,
} from '@chakra-ui/react';
import HomeBg from '../../Asset/home-bg.png';

const Yearbook = () => {
  return (
    <div className="home-container">
      <Box w={'100%'} h={'100vh'}>
        <Flex h="auto" bg="red">
          <Header />
        </Flex>
        <Container maxW={'container.lg'}>
          <Grid templateColumns={`repeat(6, 1fr)`} mt={20}>
            <GridItem>
              <Text>Yearbook content</Text>
            </GridItem>
            {/* <GridItem colSpan={[6, 6, 6, 3]}>
              <Box p={5}>
                <Center>
                  <Box p={5} m={5}>
                    <Heading color={'gray.700'} size="2xl" p={5}>
                      DPLMHS: Online Year Book Only One
                    </Heading>
                    <Text as="b" fontSize="2xl" p={5} color={'gray.600'}>
                      A Journey Worth Remembering!
                    </Text>
                    <Text fontSize="xl" p={5} color={'gray.600'}>
                      Treasure your High School Memories!!!
                    </Text>

                    <Button
                      borderRadius="100px"
                      backgroundColor="blue.300"
                      _hover={{ background: 'white' }}
                      align="center"
                      w={['100%', 'auto', 'auto', 'auto']}
                    >
                      {' '}
                      Avail Now
                    </Button>

                    <Button
                      ml={[0, 0, 1, 2]}
                      borderRadius="100px"
                      backgroundColor="#FCCA0C"
                      _hover={{ background: 'blue.300' }}
                      align="center"
                      w={['100%', 'auto', 'auto', 'auto']}
                      mt={[2, 0, 0, 0]}
                    >
                      {' '}
                      Learn More
                    </Button>
                  </Box>
                </Center>
              </Box>
            </GridItem>

            <GridItem colSpan={[6, 6, 6, 3]}>
              <Box>
                <Center>
                  <Box mb="20">
                    <Box h={10}></Box>
                    <Image src={HomeBg} size={60} />
                  </Box>
                </Center>
              </Box>
            </GridItem> */}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Yearbook;
