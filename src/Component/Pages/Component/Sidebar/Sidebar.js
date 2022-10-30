import '../Style/Sidebar.css';
import {
  Image,
  Heading,
  Box,
  Divider,
  Text,
  useNavigate,
  RouteData,
  Menu,
  MenuItem,
} from '../../../Packages';

const Sidebar = ({ flip }) => {
  const navigate = useNavigate();

  const handleClick = path => {
    navigate('/home' + path.href);
  };

  return (
    <>
      <div
        className="sidebar"
        style={{ width: flip && '75px', display: flip && 'block' }}
      >
        <Menu iconShape="circle" color={'#1d8b10'}>
          <MenuItem
            icon={<Image w={8} src={require('../../../../Asset/logo.jpg')} />}
          >
            <Heading size={'md'}>Year Book</Heading>
          </MenuItem>
          <Box h={10} p={4}>
            <Divider color={'red'} width={'1px'} />
          </Box>
          {RouteData.map(data => {
            return (
              <MenuItem
                key={data.index}
                onClick={() => handleClick(data)}
                icon={data.icon}
              >
                <Text> {data.label}</Text>
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </>
  );
};

export default Sidebar;
