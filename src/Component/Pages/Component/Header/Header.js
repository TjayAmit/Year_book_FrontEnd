import { MdMenu, MdClose } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { BiCodeBlock } from 'react-icons/bi';
import { AiOutlineDownCircle, AiOutlineLogout } from 'react-icons/ai';
import {
  Box,
  Flex,
  Heading,
  Avatar,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Text,
  Stack,
  useMain,
  useProSidebar,
  useNavigate,
} from '../../../Packges';

const Header = ({ flip, setflip }) => {
  const { user } = useMain();
  const { collapseSidebar, toggleSidebar } = useProSidebar();
  const navigate = useNavigate();
  const handleClick = () => {
    setflip(!flip);
    toggleSidebar();
    collapseSidebar();
  };

  return (
    <>
      <Box
        w={'100%'}
        h={'50px'}
        p={2}
        display={'flex'}
        justifyContent={'space-between'}
        boxShadow={'lg'}
        className={'header'}
      >
        <Box
          transform={'translateY(20%)'}
          cursor={'pointer'}
          onClick={() => handleClick()}
        >
          <Flex>
            <Box id="btnflip" style={{ marginLeft: flip ? '70px' : '' }}>
              {flip ? <MdClose size={28} /> : <MdMenu size={28} />}
            </Box>
            <Box ml={2}>
              {!flip ? (
                <Heading
                  fontSize={17}
                  mt={1}
                  fontWeight={'bolder'}
                  color={'#0F531E'}
                  display={['block', 'block', 'none']}
                >
                  TeleMedicine
                </Heading>
              ) : (
                ''
              )}
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex mr={0} p={1}>
            <Avatar size={'sm'} name={user.name} src={user.url} mr={1} />
            <Heading
              transform={'translateY(20%)'}
              size={'sm'}
              fontWeight={'normal'}
              fontSize={'14'}
              mr={1}
            >
              {user.name}
            </Heading>
            <Box>
              <Menu>
                <MenuButton className="btnMenuProfile">
                  <button id="btnMenuProfile">
                    <AiOutlineDownCircle fontSize={20} />
                  </button>
                </MenuButton>

                <MenuList shadow={'lg'}>
                  <Box p={7} bg={'green.50'}>
                    <Flex>
                      <Avatar size="lg" name={user.name} src={user.url} />
                      <Box ml={4}>
                        <Stack>
                          <Text fontWeight={'bold'} fontSize={13}>
                            {user.name}
                            <br />
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 'normal',
                              }}
                            >
                              Internal Medicine
                            </span>
                            <br />
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 'normal',
                                textTransform: 'uppercase',
                              }}
                            >
                              Pasonanca High School Year Book
                            </span>
                          </Text>
                        </Stack>
                      </Box>
                    </Flex>
                  </Box>
                  <div style={{ border: '1px solid #d1eae5' }}></div>

                  <MenuItem
                    onClick={() => {
                      navigate('MyAccount');
                    }}
                    fontSize={14}
                    color={'gray.600'}
                  >
                    <FiSettings style={{ marginRight: '10px' }} />
                    Account Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate('/credits');
                    }}
                    fontSize={14}
                    color={'gray.600'}
                  >
                    <BiCodeBlock style={{ marginRight: '10px' }} />
                    Credits
                  </MenuItem>

                  <MenuItem bg={'gray.50'} fontSize={14} color={'red.400'}>
                    <AiOutlineLogout style={{ marginRight: '10px' }} />
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Header;