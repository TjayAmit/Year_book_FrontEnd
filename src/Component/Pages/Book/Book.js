import { useMemo, useState } from 'react';
import { Box, TableComponent, Flex, Heading } from '../../Packages';
import { BookData } from '../Component/SampleData';
import useMain from '../../Context/Main/MainContext';
import {
  BatchPostRequest,
  BatchPutRequest,
} from '../../API/Server_Request/Batch_Request';
import { useToast } from '@chakra-ui/react';
const Book = () => {
  const [search, setSearch] = useState('');
  const [close, setClose] = useState(false);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const {
    batchData,
    batchname,
    setBatchname,
    batchdescription,
    setBatchDescription,
    batchYear,
    setBatchyear,
    setChangesInstructor,
    resetStates,
    updateID,
  } = useMain();
  const callBack = e => {
    e.preventDefault();
  };

  const column = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'BATCH',
        accessor: 'Year',
      },
      {
        Header: 'Name and Description',
        accessor: 'Name',
      },

      {
        Header: 'AVAILE',
        accessor: 'availed',
      },
      {
        Header: 'MALE',
        accessor: 'male',
      },
      {
        Header: 'FEMALE',
        accessor: 'female',
      },
      {
        Header: 'GRADUATES',
        accessor: 'total',
      },
      {
        Header: 'ACTION',
        accessor: 'action',
      },
    ],
    []
  );

  const handleAdd = async () => {
    try {
      const request = await BatchPostRequest({
        body: {
          Name: batchname,
          Description: batchdescription,
          Year: batchYear,
        },
      });

      if (request.data.status == 200) {
        toast({
          title: 'Account updated.',
          description: 'User Account Updated Successfully!',
          position: 'top',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        resetStates();
        setClose(true);
        setLoading(false);

        setChangesInstructor(true);
      }
      if (request.data.status == 500) {
        toast({
          title: 'Please fill all Required fields!',
          description: 'Adding UnSuccessful.',
          position: 'top',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    //setChangesInstructor(true);
  };

  const HandleUpdate = async () => {
    const request = await BatchPutRequest({
      params: updateID,
      body: {
        Name: batchname,
        Description: batchdescription,
        Year: batchYear,
      },
    });

    if (request.data.status == 200) {
      toast({
        title: 'Account updated.',
        description: 'User Account Updated Successfully!',
        position: 'top',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      resetStates();
      setClose(true);
      setLoading(false);

      setChangesInstructor(true);
    }
    if (request.data.status == 500) {
      toast({
        title: 'Please fill all Required fields!',
        description: 'Adding UnSuccessful.',
        position: 'top',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const filter = batchData.filter(
    x =>
      x.Name.toLowerCase().includes(search.toLowerCase()) ||
      x.Year.toLowerCase().includes(search.toLowerCase())
  );
  // x.Middlename.toLowerCase().includes(search.toLowerCase())

  return (
    <Box w={'100%'}>
      <Box w={'100%'}>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={32} color={'#120e63'}>
            Books
          </Heading>
        </Flex>
      </Box>
      <TableComponent
        columns={column}
        data={filter}
        search={search}
        AddNew={handleAdd}
        Update={HandleUpdate}
        setSearch={setSearch}
        placeholder={'Search batch'}
        button={'Batch'}
        callBack={callBack}
        close={close}
        setClose={setClose}
        loading={loading}
        setLoading={setLoading}
      />
    </Box>
  );
};

export default Book;
