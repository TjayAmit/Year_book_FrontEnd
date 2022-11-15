import React, { useState } from 'react';
import {
  Box,
  TableComponent,
  Flex,
  Heading,
  Button,
  Text,
  Input,
  Select,
  FormControl,
  FormLabel,
} from '../../Packages';
import useMain from '../../Context/Main/MainContext';
function AddUser() {
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
  } = useMain();
  return (
    <div>
      <Flex mb={2}>
        <Box>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input
              value={firstname}
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
              value={lastname}
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
            value={contact}
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
            onChange={e => {
              SetGender(e.target.value);
            }}
          >
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>
      </Box>

      <Box mb={2}>
        <FormControl isRequired>
          <FormLabel>Role</FormLabel>
          <Select
            onChange={e => {
              setRole(e.target.value);
            }}
          >
            <option value="">-- Select --</option>
            <option value="0">Admin</option>
            <option value="1">Instructor</option>
            <option value="2">Clients</option>
          </Select>
        </FormControl>
      </Box>

      <Box mb={2}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
      </Box>

      <Box mb={2}>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            value={'user_' + lastname}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>
      </Box>
    </div>
  );
}

export default AddUser;
