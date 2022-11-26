import React, { useEffect } from 'react';
import {
  Box,
  Textarea,
  Text,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import useMain from '../../Context/Main/MainContext';
function SectionModal({ data, action, Update }) {
  const {
    sectionname,
    setSectionNameData,
    Instructor_id,
    setInstructor_id,
    sectionDescription,
    setSectionDescription,
    updateID,
    setUpdateID,
  } = useMain();

  useEffect(() => {
    if (action == 'update') {
      setSectionNameData(data.Name);
      setSectionDescription(data.Description);
      setUpdateID(data.id);
    }
  }, []);
  return (
    <div>
      <Box>
        <FormControl isRequired mb={2}>
          <FormLabel>Name</FormLabel>
          <Input
            defaultValue={action == 'update' ? data.Name : null}
            onChange={e => {
              setSectionNameData(e.target.value);
            }}
          />
        </FormControl>
        <FormControl isRequired mb={2}>
          <FormLabel>Description</FormLabel>
          <Textarea
            defaultValue={action == 'update' ? data.Description : null}
            onChange={e => {
              setSectionDescription(e.target.value);
            }}
          />
        </FormControl>
      </Box>
    </div>
  );
}

export default SectionModal;
