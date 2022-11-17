import { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import {
  Avatar,
  Box,
  Button,
  CustomFormController,
  CustomSelect,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  toastposition,
  toastvariant,
} from '../../Packages';

import useMain from '../../Context/Main/MainContext';

const Register = () => {
  const {
    firstname,
    SetFirstname,
    middlename,
    setMiddlename,
    lastname,
    SetLastname,
    sex,
    setSex,
    signUp,
    role,
    setRole,
    vpassword,
    setVPassword,
    email,
    setEmail,
    password,
    setPassword,
    resetStates,
    roleSelection,
    sexSelection,
  } = useMain();

  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [exception, setException] = useState('');

  const handleBack = e => {
    e.preventDefault();
    navigate('/login');
    resetStates();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await signUp(e);
    if (response === 'success') {
      toast({
        title: 'Please wait for account approval!',
        position: toastposition,
        variant: toastvariant,
        status: 'success',
        duration: 10000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: 'Registration failed!',
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
        h={'100vh'}
        display={'flex'}
        justifyContent={'center'}
        bg={'#f7f5f9'}
      >
        <Box
          w={'40rem'}
          h={'38rem'}
          overflow="hidden"
          m={'auto'}
          bg={'white'}
          rounded={8}
          boxShadow={'2xl'}
          p={30}
        >
          <Box display={'flex'} columnGap={5}>
            <Avatar size={'lg'} src={require('../../../Asset/logo.jpg')} />
            <Box mt={'2'}>
              <Heading fontSize="26px" fontWeight={'600'}>
                Sign up
              </Heading>
              <Text color={'#505050'}>{'Enter credential to register'}</Text>
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
          <form class="" onSubmit={e => handleSubmit(e)}>
            <Grid
              templateRows={`repeat( 4, 1fr)`}
              templateColumns={`repeat( 2 , 1fr)`}
              gap={2}
              overflow={'hidden'}
            >
              <GridItem rowSpan={4} colSpan={[2, 1]}>
                <CustomFormController
                  isSignup={true}
                  title={'First name'}
                  type={'text'}
                  value={firstname}
                  placeholder={`Enter First Name`}
                  setValue={SetFirstname}
                  errorMessage={`First name is required.`}
                />
                <CustomFormController
                  isSignup={true}
                  title={'Middle name'}
                  type={'Text'}
                  value={middlename}
                  placeholder={`Enter middle name`}
                  setValue={setMiddlename}
                  errorMessage={`Middle name is required.`}
                  // isError={isErrorPassword}
                  children={<FaUserAlt color={'#1f894c'} />}
                />
                <CustomFormController
                  isSignup={true}
                  title={'Last name'}
                  type={'Text'}
                  value={lastname}
                  placeholder={`Enter Last name`}
                  setValue={SetLastname}
                  errorMessage={`Last name is required.`}
                  // isError={isErrorPassword}
                  children={<FaUserAlt color={'#1f894c'} />}
                />
                <CustomSelect
                  title={'Sex'}
                  value={sex}
                  datas={sexSelection}
                  setValue={setSex}
                  mt={'1.27rem'}
                />
              </GridItem>
              <GridItem rowSpan={4} colSpan={[2, 1]}>
                <CustomFormController
                  isSignup={true}
                  title={'Email'}
                  type={'email'}
                  value={email}
                  placeholder={'Enter email'}
                  setValue={setEmail}
                  errorMessage={'Email is required.'}
                  // isError={isErrorEmail}
                />
                <CustomSelect
                  title={'User Type'}
                  value={role}
                  datas={roleSelection}
                  setValue={setRole}
                  mt={'1.27rem'}
                />
                <CustomFormController
                  isSignup={true}
                  title={'Password'}
                  type={'password'}
                  value={password}
                  placeholder={'Enter password'}
                  setValue={setPassword}
                  errorMessage={'Password is required.'}
                  // isError={isErrorPassword}
                />

                <CustomFormController
                  isSignup={true}
                  title={'Confirm Password'}
                  type={'password'}
                  value={vpassword}
                  placeholder={'Type password again'}
                  setValue={setVPassword}
                  errorMessage={'Confirm password is required.'}
                  // isError={isErrorPassword}
                  children={<FaLock color="primary.900" />}
                />
              </GridItem>
            </Grid>
            <Grid
              templateRows={`repeat( 1, 1fr)`}
              templateColumns={`repeat(2, 1fr)`}
              gap={2}
              mt={'3.2rem'}
              overflow={'hidden'}
            >
              <GridItem rowSpan={1}>
                <Button
                  width={'100%'}
                  bg={'secondary.900'}
                  _hover={{
                    bg: 'secondary.800',
                  }}
                  color="white"
                  onClick={e => handleBack(e)}
                >
                  {'Sign in'}
                </Button>
              </GridItem>
              <GridItem rowSpan={1}>
                <Button
                  isLoading={loading}
                  loadingText={loading ? null : 'Submitting'}
                  type={'Submit'}
                  value={'Submit'}
                  marginTop="0px"
                  width={'100%'}
                  bg={'primary.900'}
                  _hover={{
                    bg: 'primary.800',
                  }}
                  color="white"
                  onClick={e => handleSubmit(e)}
                >
                  {'Submit'}
                </Button>
              </GridItem>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Register;
