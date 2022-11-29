import React from 'react';
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Textarea,
} from '@chakra-ui/react';
import { StudentPostRequest } from '../../API/Server_Request/Student_Request';
function AddStudent(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleSave = async e => {
    e.preventDefault();
    const form = new FormData(e.target);

    console.log(form.get('file'));

    // const request = await StudentPostRequest({
    //   body: {
    //     Firstname: form.get('firstname'),
    //     Middlename: form.get('middlename'),
    //     Lastname: form.get('lastname'),
    //     Email: form.get('email'),
    //     Contact: form.get('contact'),
    //     Batch_ID: form.get('batch'),
    //     Section_ID: form.get('section'),
    //     sex: form.get('sex'),
    //     Honors: form.get('honors'),
    //     photo: form.get('file'),
    //   },
    // });

    // if (request.data.status == 200) {
    //   console.log('success');
    // }
    // if (request.data.status == 500) {
    //   console.log('fail');
    // }
  };
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        bg={'#120e63'}
        color={'white'}
        _hover={{
          bg: '#120e63',
        }}
      >
        {'New Student'}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xl'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New Student</DrawerHeader>
          <form
            method="POST"
            enctype="multipart/form-data"
            onSubmit={handleSave}
          >
            <DrawerBody fontSize={'14px'}>
              <Grid templateColumns="repeat(6, 1fr)" gap={3}>
                <GridItem colSpan={[6, 3, 3, 2]}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder="" name="firstname" required autoFocus />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={[6, 3, 3, 2]}>
                  <FormControl isRequired>
                    <FormLabel>Middle Name</FormLabel>
                    <Input
                      placeholder=""
                      name="middlename"
                      required
                      autoFocus
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={[6, 3, 3, 2]}>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder="" name="lastname" required autoFocus />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={[6, 3, 3, 3]}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type={'email'}
                      required
                      placeholder=""
                      name="email"
                      autoFocus
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={[6, 3, 3, 3]}>
                  <FormControl isRequired>
                    <FormLabel>Contact</FormLabel>
                    <Input placeholder="" name="contact" required autoFocus />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={[6, 3, 3, 2]}>
                  <FormControl isRequired>
                    <FormLabel>Batch</FormLabel>
                    <Input placeholder="" name="batch" autoFocus />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={[6, 3, 3, 2]}>
                  <FormControl isRequired>
                    <FormLabel>Section</FormLabel>
                    <Input placeholder="" name="section" autoFocus />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={[6, 3, 3, 2]}>
                  <FormControl isRequired>
                    <FormLabel>Sex</FormLabel>
                    <Input placeholder="" name="sex" autoFocus />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={[6, 6, 6, 6]}>
                  <FormControl>
                    <FormLabel>Honors</FormLabel>
                    <Textarea
                      placeholder="State all honors here .."
                      name="honors"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={[6, 3, 3, 3]}>
                  <FormControl>
                    <FormLabel>Photo</FormLabel>
                    <Input
                      type="file"
                      accept="image/*"
                      name="file"
                      placeholder=""
                      autoFocus
                    />
                  </FormControl>
                </GridItem>
              </Grid>
            </DrawerBody>

            <DrawerFooter>
              <Button type="button" variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="blue">
                Save
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddStudent;
