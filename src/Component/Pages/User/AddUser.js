import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  TableComponent,
  Flex,
  Heading,
  Button,
  Text,
  Input,
  FormControl,
  FormLabel,
  Textarea,
} from '../../Packages';
import useMain from '../../Context/Main/MainContext';
import Select from 'react-select';
function AddUser({ action, data, usertype, sectionData }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    firstname,
    SetFirstname,
    lastname,
    SetLastname,
    contact,
    SetContact,
    Gender,
    SetGender,
    Address,
    setAddress,
    role,
    setRole,
    id,
    setId,
    setSectionID,
    SectionID,
  } = useMain();
  const passwordRef = useRef();

  useEffect(() => {
    setPassword('User_Yearbook');
    if (action == 'update') {
      SetFirstname(data.Firstname);
      SetLastname(data.Lastname);
      SetContact(data.Contact);
      SetGender(data.Gender);
      setAddress(data.Address);
      setRole(data.UserType);
      setEmail(data.Email);
      setPassword(data.Password);
      setId(data.id);
      setSectionID(data.Section_ID);
    }
  }, []);

  const genderoptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];

  const Utypeoptions = [
    { value: '0', label: 'Admin' },
    { value: '1', label: 'Instructor' },
    { value: '2', label: 'Client' },
  ];
  return (
    <div>
      <Flex mb={2}>
        <Box>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              defaultValue={action == 'update' ? data.Firstname : null}
              onChange={e => {
                SetFirstname(e.target.value);
              }}
            />
          </FormControl>
        </Box>

        <Box ml={2}>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              defaultValue={action == 'update' ? data.Lastname : null}
              onChange={e => {
                SetLastname(e.target.value);
                setPassword('user_' + e.target.value);
              }}
            />
          </FormControl>
        </Box>
      </Flex>
      <Box mb={2}>
        <FormControl isRequired>
          <FormLabel>Contact</FormLabel>
          <Input
            defaultValue={action == 'update' ? data.Contact : null}
            onChange={e => {
              SetContact(e.target.value);
            }}
          />
        </FormControl>
      </Box>

      <Box mb={2}>
        <FormControl isRequired>
          <FormLabel>Gender</FormLabel>

          <Select
            defaultValue={action == 'update' ? data.Gender : null}
            onChange={e => {
              SetGender(e.value);
            }}
            options={genderoptions}
          />
        </FormControl>
      </Box>
      {usertype == 'Instructor' && (
        <Box mb={2}>
          <FormControl isRequired>
            <FormLabel>Select Section</FormLabel>
            <Select
              defaultValue={action == 'update' ? data.Section_ID : null}
              onChange={e => {
                setSectionID(e.value);
              }}
              options={sectionData}
            />
          </FormControl>
        </Box>
      )}

      {console.log(sectionData)}

      {usertype == 'client' || usertype == 'Instructor' ? (
        <Box mb={2}>
          <FormControl isRequired>
            <FormLabel>Address </FormLabel>
            <Textarea
              defaultValue={action == 'update' ? data.Address : null}
              onChange={e => {
                setAddress(e.target.value);
              }}
            />
          </FormControl>
        </Box>
      ) : (
        <Box mb={2}>
          <FormControl isRequired>
            <FormLabel>Role </FormLabel>

            <Select
              defaultValue={action == 'update' ? data.UserType : null}
              onChange={e => {
                setRole(e.value);
              }}
              options={Utypeoptions}
            />
          </FormControl>
        </Box>
      )}

      <Box mb={2}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            defaultValue={action == 'update' ? data.Email : null}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
      </Box>

      {action == 'update' ? null : (
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
            fontWeight={'normal'}
            colorScheme={'blue'}
            onClick={() => {
              passwordRef.current.value = password;
            }}
          >
            Use Default Password
          </Button>
        </Box>
      )}
    </div>
  );
}

export default AddUser;
