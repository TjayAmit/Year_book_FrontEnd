import React, { useState } from 'react';
import {
  Box,
  TableComponent,
  Flex,
  Heading,
  Button,
  Text,
  Input,
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
  } = useMain();
  return (
    <div>
      <Flex mb={2}>
        <Box>
          <Text>First Name</Text>
          <Input
            value={firstname}
            onChange={e => {
              SetFirstname(e.target.value);
            }}
          />
        </Box>

        <Box ml={2}>
          <Text>Last Name</Text>
          <Input
            value={lastname}
            onChange={e => {
              SetLastname(e.target.value);
              setPassword('user_' + e.target.value);
            }}
          />
        </Box>
      </Flex>
      <Box mb={2}>
        <Text>Contact</Text>
        <Input
          value={contact}
          onChange={e => {
            SetContact(e.target.value);
          }}
        />
      </Box>
      <Box mb={2}>
        <Text>Email</Text>
        <Input
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </Box>

      <Box mb={2}>
        <Text>Password</Text>
        <Input
          value={'user_' + lastname}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </Box>
    </div>
  );
}

export default AddUser;
