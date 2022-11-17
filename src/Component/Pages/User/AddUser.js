import React, { useState, useEffect, useRef } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import {
  Box,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  CustomFormController,
  CustomSelect,
} from '../../Packages';
import useMain from '../../Context/Main/MainContext';

function AddUser({ action, data, usertype }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    firstname,
    SetFirstname,
    middlename,
    setMiddlename,
    lastname,
    SetLastname,
    sex,
    setSex,
    setId,
    FK_section_ID,
    setFK_section_ID,
    sexSelection,
    Section,
    sectionName,
    setSectionName,
    sectionDescription,
    setSectionDescription,
    FK_instructor_ID,
    setFK_instructor_ID,
    InstructorSelection,
  } = useMain();
  const passwordRef = useRef();

  useEffect(() => {
    setPassword('User_Yearbook');
    if (action == 'update') {
      SetFirstname(data.Firstname);
      setMiddlename(data.Middlename);
      SetLastname(data.Lastname);
      setSex(data.Sex);
      setEmail(data.Email);
      setId(data.id);
    }
  }, []);

  return (
    <div>
      <Flex mb={2} columnGap={5}>
        {usertype === 'client' ||
        usertype === 'Instructor' ||
        usertype === 'User' ? (
          <CustomFormController
            isSignup={true}
            title={'First name'}
            type={'text'}
            value={firstname}
            placeholder={`Enter First Name`}
            setValue={SetFirstname}
            errorMessage={`First name is required.`}
          />
        ) : null}
        {usertype === 'client' ||
        usertype === 'Instructor' ||
        usertype === 'User' ? (
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
        ) : null}
      </Flex>
      <Flex mb={2} columnGap={5}>
        {usertype === 'client' ||
        usertype === 'Instructor' ||
        usertype === 'User' ? (
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
        ) : null}
        {usertype === 'client' ||
        usertype === 'Instructor' ||
        usertype === 'User' ? (
          <CustomSelect
            title={'Sex'}
            value={sex}
            datas={sexSelection}
            setValue={setSex}
            mt={'1.27rem'}
          />
        ) : null}
      </Flex>

      {usertype == 'client' ? (
        <Box mb={2}>
          <FormControl isRequired>
            <FormLabel>Address </FormLabel>
            <Textarea
              defaultValue={action == 'update' ? data.Address : null}
              onChange={e => {
                // setAddress(e.target.value);
              }}
            />
          </FormControl>
        </Box>
      ) : null}

      <Box mb={2}>
        {usertype === 'client' ||
        usertype === 'Instructor' ||
        usertype === 'User' ? (
          <CustomSelect
            title={'Section'}
            value={FK_section_ID}
            datas={Section}
            setValue={setFK_section_ID}
            mt={'1.27rem'}
          />
        ) : null}
        {usertype === 'client' ||
        usertype === 'Instructor' ||
        usertype === 'User' ? (
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
        ) : null}

        {usertype === 'Section' ? (
          <CustomFormController
            isSignup={true}
            title={'Name'}
            type={'text'}
            value={sectionName}
            placeholder={'Enter name'}
            setValue={setSectionName}
            errorMessage={'Section name is required.'}
            // isError={isErrorEmail}
          />
        ) : null}
        {usertype === 'Section' ? (
          <CustomFormController
            isSignup={true}
            title={'Description'}
            type={'text'}
            value={sectionDescription}
            placeholder={'Enter description'}
            setValue={setSectionDescription}
            errorMessage={'Section description is required.'}
            // isError={isErrorEmail}
          />
        ) : null}
        {usertype === 'Section' ? (
          <CustomSelect
            title={'Instructor'}
            value={FK_instructor_ID}
            datas={InstructorSelection}
            setValue={setFK_instructor_ID}
            mt={'1.27rem'}
          />
        ) : null}
      </Box>

      {action !== 'update' &&
      (usertype === 'client' ||
        usertype === 'Instructor' ||
        usertype === 'User') ? (
        <Box mb={2}>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              ref={passwordRef}
              defaultValue={action == 'update' ? data.Password : null}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button
            variant={'outline'}
            size={'sm'}
            mt={2}
            fontWeight={'normal'}
            colorScheme={'blue'}
            onClick={() => {
              passwordRef.current.value = password;
            }}
          >
            Use Default Password
          </Button>
        </Box>
      ) : null}
    </div>
  );
}

export default AddUser;
