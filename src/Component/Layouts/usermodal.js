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
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  useEffect(() => {
    onClose();
    setClose(false);
  }, [close]);

  return (
    <>
      <a onClick={onOpen}>{BtnOpen}</a>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{Type == 'User' ? <AddUser /> : ''}</ModalBody>

          <ModalFooter>
            <Button
              variant={'ghost'}
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              onClick={() => {
                AddNew();
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
