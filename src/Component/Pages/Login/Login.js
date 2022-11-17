import { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useToast } from '@chakra-ui/react';
import {
  Avatar,
  Box,
  Button,
  CustomFormController,
  Center,
  Heading,
  Text,
  toastposition,
  toastvariant,
} from '../../Packages';

import useMain from '../../Context/Main/MainContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, signIn } = useMain();
  const [loading, setLoading] = useState(false);
  const [exception, setException] = useState(false);

  const handleNavigateSignup = e => {
    e.preventDefault();
    navigate('/signup');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await signIn(e);

    if (response === 'success') {
      toast({
        title: 'Redirecting!',
        position: toastposition,
        variant: toastvariant,
        status: 'success',
        duration: 10000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: 'Login Failed!',
      position: toastposition,
      variant: toastvariant,
      status: 'error',
      duration: 10000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box
        w={'100%'}
        h={'100vh'}
        bg={'white'}
        display={'flex'}
        justifyContent={'center'}
      >
        <Center>
          <Box
            w={'27rem'}
            h={'32rem'}
            rounded={10}
            boxShadow={'2xl'}
            p={5}
            bg={'white'}
          >
            <Box display={'flex'} columnGap={5}>
              <Avatar size={'lg'} src={require('../../../Asset/logo.jpg')} />
              <Box mt={'2'}>
                <Heading fontSize="26px" fontWeight={'600'}>
                  Sign in
                </Heading>
                <Text color={'#505050'}>{'Enter credential to continue'}</Text>
              </Box>
            </Box>
            {exception ? (
              <Box h={10} mt={5} display={'flex'} justifyContent={'center'}>
                <Center>
                  <Text color={'red'}>{'Email or Password Incorrect'}</Text>
                </Center>
              </Box>
            ) : (
              <Box h={5} />
            )}
            <form onSubmit={e => handleSubmit(e)}>
              <CustomFormController
                isSignup={false}
                title={'Email'}
                type={'email'}
                value={email}
                setValue={setEmail}
                children={<FaUserAlt color={'#120e63'} />}
                placeholder={'Enter username'}
              />
              <CustomFormController
                isSignup={false}
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
                  bg: 'light.900',
                  color: 'dark.900',
                }}
                _active={{
                  bg: 'white',
                }}
                color="grey"
                fontWeight={'400'}
                mt={8}
              >
                {'forgot password ?'}
              </Button>
              <Button
                isLoading={loading}
                loadingText={loading ? null : 'Submitting'}
                type={'Submit'}
                value={'Submit'}
                mt={5}
                width={'100%'}
                bg={'primary.900'}
                _hover={{
                  bg: 'primary.800',
                }}
                color="light.900"
                onClick={e => handleSubmit(e)}
              >
                {'Sign In'}
              </Button>{' '}
              <Box h={3}></Box>
              <Button
                type={'text'}
                marginTop="0px"
                width={'100%'}
                bg={'light.900'}
                _hover={{
                  bg: 'secondary.800',
                }}
                color="secondary.900"
                onClick={e => handleNavigateSignup(e)}
              >
                {'Create account'}
              </Button>
            </form>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Login;
