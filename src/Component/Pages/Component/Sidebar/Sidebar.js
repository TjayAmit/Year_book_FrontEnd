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
} from '../../../Packges';

const SidebarDividerHeader = ({ data, header, flip }) => {
  return (
    <>
      {flip ? null : (
        <span
          key={data.index}
          style={{
            fontSize: '12px',
            marginLeft: '10%',
            color: '#37c739',
          }}
          id="consult"
        >
          {header}
        </span>
      )}
    </>
  );
};

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
            <Heading size={'md'}>TELEMEDICINE</Heading>
          </MenuItem>
          <Box h={10} p={4}>
            <Divider color={'red'} width={'1px'} />
          </Box>
          {RouteData.path.map(data => {
            if (data.index === 1) {
              return (
                <>
                  <SidebarDividerHeader
                    data={data}
                    header={'REPORTS'}
                    flip={flip}
                  />

                  <MenuItem
                    key={data.index}
                    onClick={() => handleClick(data)}
                    icon={data.icon}
                  >
                    <Text> {data.label}</Text>
                  </MenuItem>
                </>
              );
            }
            if (data.index === 5) {
              return (
                <>
                  <SidebarDividerHeader
                    data={data}
                    header={'CONSULTATION'}
                    flip={flip}
                  />

                  <MenuItem onClick={() => handleClick(data)} icon={data.icon}>
                    <Text> {data.label}</Text>
                  </MenuItem>
                </>
              );
            }
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
