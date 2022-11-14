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
import AboutBg from '../../Asset/bg-about.svg';

const About = () => {
  return (
    <>
      <div className="home-container">
        <Box w={'100%'} h={'100vh'}>
          <Flex h="auto">
            <Header />
          </Flex>
          <Container maxW={'container.lg'}>
            <Grid templateColumns={`repeat(6, 1fr)`} mt={20}>
              <GridItem colSpan={[6, 6, 6, 3]}>
                <Box p={5}>
                  <Center>
                    <Center>
                      <Box w={'30rem'} h={'25rem'} mb="20">
                        <Box h={10}></Box>
                        <Image src={AboutBg} />
                      </Box>
                    </Center>
                  </Center>
                </Box>
              </GridItem>

              <GridItem colSpan={[6, 6, 6, 3]}>
                <Box>
                  <Center>
                    <Box mb="20" p={5} m={5}>
                      <Heading size="2xl" color={'gray.700'} p={5}>
                        DPLMHS: Online Year Book
                      </Heading>
                      <Box p={5}>
                        <Text fontSize={'md'} color={'gray.600'}>
                          This website serves as a tool to make your yearbook as
                          individual as you would like. You can then choose to
                          get a number of copies printed out, with custom pages
                          for each friend, activity or club. Plus, the group
                          features mean each of your friends can upload their
                          own content to the site and so are a culmination of
                          everyone’s personal tastes and memories.
                        </Text>
                      </Box>
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
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default About;
