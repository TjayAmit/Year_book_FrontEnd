import { AiTwotoneEdit, AiTwotoneProfile } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import {
  Avatar,
  Box,
  Center,
  Flex,
  IconButton,
  Text,
  Heading,
} from '../../../Packages';

const StudentProfile = ({ url, name, qoute }) => {
  return (
    <Box w={'200px'} h={'270px'} boxShadow={'lg'} rounded={10}>
      <Box
        w={'100%'}
        h={'40%'}
        mt={2}
        bg={'rgba(18,1,99,0.12)'}
        roundedTop={10}
        p={2}
      >
        <Center>
          <Avatar src={url} width={20} h={20} />
        </Center>
      </Box>
      <Box p={4}>
        <Heading size={'sm'} textAlign={'center'}>
          {name}
        </Heading>
      </Box>
      <Box textAlign={'center'}>
        <Text fontSize={10}>{'WISE MAN ONCE SAID'}</Text>
        <Text>{qoute}</Text>
      </Box>
      <Box mt={2}>
        <Flex justifyContent={'space-around'}>
          <IconButton
            icon={<AiTwotoneProfile />}
            _hover={{ bg: 'green', color: 'white' }}
          />
          <IconButton icon={<AiTwotoneEdit />} />
          <IconButton icon={<IoMdTrash />} />
        </Flex>
      </Box>
    </Box>
  );
};

export default StudentProfile;
