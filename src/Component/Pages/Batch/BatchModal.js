import React, { useState, useEffect } from 'react';
import {
  Text,
  Input,
  Textarea,
  Box,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { CustomSelectYear } from '../../API/Server_Request/Batch_Request';
import useMain from '../../Context/Main/MainContext';
function BatchModal({ action, data }) {
  const [year, setYear] = useState([]);
  const {
    batchname,
    setBatchname,
    batchdescription,
    setBatchDescription,
    batchYear,
    setBatchyear,
    setUpdateID,
  } = useMain();

  const fetchCustomyear = async () => {
    const fetched = await CustomSelectYear({ params: {} });

    if (fetched.data.status === 500) {
      return 'failed';
    }

    if (fetched.data.status === 404) {
      return 'failed';
    }

    setYear(fetched.data.data);
  };
  useEffect(() => {
    fetchCustomyear();
    if (action == 'update') {
      setBatchname(data.Name);
      setBatchDescription(data.Description);
      setBatchyear(data.Year);
      setUpdateID(data.id);
    }
  }, []);

  return (
    <div>
      <Box>
        <FormControl isRequired mb={2}>
          <FormLabel>Name</FormLabel>
          <Input
            size={'sm'}
            value={batchname}
            onChange={e => {
              setBatchname(e.target.value);
            }}
          />
        </FormControl>

        <FormControl isRequired mb={2}>
          <FormLabel>Description</FormLabel>
          <Textarea
            size={'sm'}
            value={batchdescription}
            onChange={e => {
              setBatchDescription(e.target.value);
            }}
          />
        </FormControl>

        <FormControl isRequired mb={2}>
          <FormLabel>Year</FormLabel>
          <Select
            value={batchYear}
            onChange={e => {
              setBatchyear(e.target.value);
            }}
          >
            <option value="">-- Select Year --</option>
            {year.map(x => {
              return (
                <>
                  <option value={x}>{x}</option>
                </>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default BatchModal;
