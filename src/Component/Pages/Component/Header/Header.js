import { MdMenu, MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Heading, useProSidebar } from '../../../Packages';
import '../Style/Sidebar.css';

const Header = ({ setflip }) => {
  // const { user } = useMain();
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const handleClick = () => {
    setflip(!collapsed);
    collapseSidebar();
  };

  return (
    <Box
      w={'100%'}
      h={'50px'}
      p={2}
      display={'flex'}
      justifyContent={'space-between'}
      boxShadow={'lg'}
      bg={'white'}
      position={'fixed'}
      zIndex={999}
    >
      <Box
        transform={'translateY(20%)'}
        cursor={'pointer'}
        onClick={() => handleClick()}
      >
        <Flex>
          <Box>{collapsed ? <MdClose size={28} /> : <MdMenu size={28} />}</Box>
          <Box ml={2} p={1}>
            <Heading fontSize={17} fontWeight={'bolder'} color={'#120e63'}>
              DPLMHS: Year Book
            </Heading>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
