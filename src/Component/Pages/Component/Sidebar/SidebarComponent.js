import '../Style/Sidebar.css';
import {
  Image,
  Heading,
  Box,
  Center,
  Divider,
  Flex,
  Text,
  Menu,
  MenuItem,
  Sidebar,
  useMediaQuery,
} from '../../../Packages';
import RouteData from '../../../Route/RouteData';
import { useNavigate } from 'react-router-dom';
import '../Style/Sidebar.css';

const SidebarDividerHeader = ({ data, header, flip }) => {
  return (
    <>
      {flip ? null : (
        <span
          key={data.index}
          style={{
            fontSize: '12px',
            marginLeft: '10%',
            color: '#120e63',
          }}
          id="dashboard"
        >
          {header}
        </span>
      )}
    </>
  );
};

const SidebarComponent = ({ flip }) => {
  const navigate = useNavigate();
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  const handleClick = path => {
    navigate('/home' + path.href);
  };

  return (
    <div
      className="sidebar"
      display={isSmallerThan768 ? 'none' : 'none'}
      style={{ width: flip && '75px', display: flip && 'block' }}
    >
      <Menu iconshape="circle" color={'#120e63'}>
        <Box
          w={'100%'}
          h={!flip ? '20vh' : '13vh'}
          transition={'all ease 0.4s'}
          bg={'#120e63'}
          p={2}
        >
          <Center>
            <Box w={'12rem'}>
              <Center>
                <Flex
                  justifyContent={'center'}
                  textAlign={'center'}
                  flexDirection={'column'}
                  rowGap={'2'}
                >
                  <Box
                    w={!flip ? '4rem' : '3rem'}
                    overflow={'hidden'}
                    rounded={100}
                    ml={!flip ? 5 : 1.4}
                  >
                    <Image src={require('../../../../Asset/logo.jpg')} />
                  </Box>
                  {!flip ? (
                    <>
                      <Text fontSize={14} color={'white'}>
                        John Doe
                      </Text>
                      <Text fontSize={12} color={'white'}>
                        johndoe@gmail.com
                      </Text>
                    </>
                  ) : null}
                </Flex>
              </Center>
            </Box>
          </Center>
        </Box>
        <Box h={10} p={4}>
          <Divider width={'1px'} />
        </Box>
        {RouteData.map(data => {
          if (data.index === 1) {
            return (
              <div key={data.index}>
                <SidebarDividerHeader
                  data={data}
                  header={'Dashbaord'}
                  flip={flip}
                />
                <MenuItem
                  key={data.index}
                  onClick={() => handleClick(data)}
                  icon={data.icon}
                >
                  {data.label}
                </MenuItem>
              </div>
            );
          }

          return (
            <MenuItem
              key={data.index}
              onClick={() => handleClick(data)}
              icon={data.icon}
            >
              {data.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default SidebarComponent;
