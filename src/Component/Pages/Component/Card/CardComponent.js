import { Box, Text, Flex, Heading } from '../../../Packages';

const CardComponent = ({ title, description, color, children }) => {
  return (
    <Box w={'100%'} h={'15vh'} boxShadow={'lg'} rounded={6} bg={color} p={2}>
      <Flex p={3} justifyContent={'start'} columnGap={2}>
        <Box w={'40%'}>{children}</Box>
        <Box w={'100%'}>
          <Heading size={'md'}>{title}</Heading>
          <Text fontSize={14}>{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardComponent;
