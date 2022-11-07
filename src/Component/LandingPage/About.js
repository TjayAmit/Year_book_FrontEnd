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
import AboutBg from '../../Asset/bg-about.svg';

const About = () => {
  return (
    <>
      <div className="about-container">
        <Box minW={'100%'} h={'100vh'}>
          <Flex bg="white">
            {' '}
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
              >
                <Center>
                  <Box w={'30rem'} h={'25rem'} mb="20">
                    <Box h={10}></Box>
                    <Image src={AboutBg} />
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
                p={5}
              >
                <Center>
                  <Box w={'50rem'} h={'25rem'} mb="20" p={5} m={5}>
                    <Heading size="2xl" p={5}>
                      DPLMHS: Online Year Book
                    </Heading>
                    <Text fontSize={'xl'}>
                      This website serves as a tool to make your yearbook as
                      individual as you would like. You can then choose to get a
                      number of copies printed out, with custom pages for each
                      friend, activity or club. Plus, the group features mean
                      each of your friends can upload their own content to the
                      site and so are a culmination of everyone’s personal
                      tastes and memories.
                    </Text>
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
        </Box>
      </div>
    </>
  );
};
export default About;
