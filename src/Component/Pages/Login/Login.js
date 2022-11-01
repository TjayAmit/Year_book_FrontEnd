import { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import {
  Box,
  Button,
  CustomFormController,
  Grid,
  GridItem,
  Center,
  Image,
  Heading,
  Text,
} from '../../Packages';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exception, setException] = useState(false);

  return (
    <>
      <Box w={'100%'} h={'100vh'}>
        <Grid
          templateRows={`repeat(1, 1fr)`}
          templateColumns={`repeat(2, 1fr)`}
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
                  <Heading color={'#120e63'}>DPLMHS: Online Year Book</Heading>
                  <Box h={10}></Box>
                  <Image src={require('../../../Asset/developer.png')} />
                </Box>
              </Center>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              w={'100%'}
              h={'100vh'}
              display={'flex'}
              justifyContent="center"
            >
              <Center>
                <Box
                  w={'27rem'}
                  h={'32rem'}
                  rounded={10}
                  boxShadow={'2xl'}
                  p={5}
                >
                  <Box display={'flex'} columnGap={5}>
                    <Image
                      w={'5rem'}
                      src={require('../../../Asset/logo.jpg')}
                    />
                    <Box mt={'2'}>
                      <Heading fontSize="26px" fontWeight={'600'}>
                        Sign in
                      </Heading>
                      <Text color={'#505050'}>
                        {'Enter credential to continue'}
                      </Text>
                    </Box>
                  </Box>
                  {exception ? (
                    <Box
                      h={10}
                      mt={5}
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <Center>
                        <Text color={'red'}>
                          {'Email or Password Incorrect'}
                        </Text>
                      </Center>
                    </Box>
                  ) : (
                    <Box h={5} />
                  )}
                  <form>
                    <CustomFormController
                      title={'Email'}
                      type={'email'}
                      value={email}
                      setValue={setEmail}
                      children={<FaUserAlt color={'#120e63'} />}
                      placeholder={'Enter username'}
                    />
                    <CustomFormController
                      title={'Password'}
                      type={'password'}
                      value={password}
                      setValue={setPassword}
                      children={<FaLock color={'#120e63'} />}
                      placeholder={'Enter password'}
                    />
                    <Button
                      width={'100%'}
                      bg={'white'}
                      _hover={{
                        bg: 'white',
                        color: 'black',
                      }}
                      _active={{
                        bg: 'white',
                      }}
                      color="grey"
                      fontWeight={'400'}
                      mt={'2'}
                    >
                      {'forgot password ?'}
                    </Button>
                    <Button
                      isLoading={!isSignup ? null : loading}
                      loadingText={!isSignup ? null : 'Submitting'}
                      type={isSignup ? null : 'submit'}
                      value={!isSignup ? null : 'Submit'}
                      marginTop="0px"
                      width={'100%'}
                      bg={isSignup ? 'grey' : '#120e63'}
                      _hover={{
                        bg: isSignup ? 'grey' : 'primary.800',
                      }}
                      color="white"
                      onClick={e => (isSignup ? setIsSignup(!isSignup) : null)}
                      mt={'5'}
                    >
                      {'Sign In'}
                    </Button>{' '}
                    <Box h={3}></Box>
                    <Button
                      isLoading={!isSignup ? null : loading}
                      loadingText={!isSignup ? null : 'Submitting'}
                      type={isSignup ? null : 'submit'}
                      value={!isSignup ? null : 'Submit'}
                      marginTop="0px"
                      width={'100%'}
                      bg={!isSignup ? 'grey' : '#120e63'}
                      _hover={{
                        bg: isSignup ? 'grey' : 'primary.800',
                      }}
                      color="white"
                      onClick={e => (isSignup ? setIsSignup(!isSignup) : null)}
                    >
                      {'Sign Up'}
                    </Button>
                  </form>
                </Box>
              </Center>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
