import { Box, Text } from '../../../Packages';

const CardComponent = ({ title }) => {
  return (
    <Box
      w={'100%'}
      h={'15vh'}
      boxShadow={'lg'}
      rounded={6}
      bg={'skyblue'}
      p={2}
    ></Box>
  );
};

export default CardComponent;
