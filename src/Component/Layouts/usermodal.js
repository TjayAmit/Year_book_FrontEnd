import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import AddUser from '../Pages/User/AddUser';
import useMain from '../Context/Main/MainContext';

function Usermodal({
  Header,
  Body,
  BtnSave,
  BtnOpen,
  AddNew,
  close,
  setClose,
  Type,
  loading,
  setLoading,
  action,
  data,
  Update,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const {
    email,
    password,
    firstname,
    lastname,
    contact,
    setEmail,
    setPassword,
    SetFirstname,
    SetLastname,
    SetContact,
    Gender,
    SetGender,
    Address,
    setAddress,
    role,
    setRole,
  } = useMain();

  useEffect(() => {
    onClose();
    setClose(false);
    setEmail('');
    setPassword('');
    SetFirstname('');
    SetLastname('');
    SetContact('');
    SetGender('');
    setAddress('');
    setRole('');
  }, [close]);

  return (
    <>
      <a onClick={onOpen}>{BtnOpen}</a>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Type == 'User' ? (
              <AddUser action={action} data={data} />
            ) : Type == 'Client' ? (
              <AddUser action={action} usertype={'client'} data={data} />
            ) : Type == 'Instructor' ? (
              <AddUser action={action} usertype={'Instructor'} data={data} />
            ) : (
              ''
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              variant={'ghost'}
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              Close
            </Button>
            <Button
              onClick={() => {
                if (action == 'update') {
                  Update();
                } else {
                  AddNew();
                }
                setLoading(true);
              }}
              isLoading={loading ? true : false}
              // loadingText="Submitting"
              colorScheme={'blue'}
              variant="solid"
            >
              {BtnSave}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Usermodal;
