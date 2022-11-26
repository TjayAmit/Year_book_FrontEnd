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
import SectionModal from '../Pages/Section/SectionModal';

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
  batchData,
  sectionData,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const { resetStates } = useMain();

  useEffect(() => {
    onClose();
    setClose(false);
    resetStates();
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
            {Type == 'User' || Type == 'Client' || Type == 'Instructor' ? (
              <AddUser
                usertype={Type}
                action={action}
                data={data}
                sectionData={sectionData}
              />
            ) : Type == 'Section' ? (
              <SectionModal action={action} data={data} />
            ) : (
              <AddUser action={action} usertype={'Section'} data={data} />
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
