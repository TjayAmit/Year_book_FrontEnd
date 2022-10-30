import {
  Flex,
  ProSidebarProvider,
  Box,
  useState,
  Header,
  Sidebar,
} from '../Packages';

const Layout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <Flex w={'100%'} pos={'absolute'}>
        <ProSidebarProvider>
          <Sidebar flip={collapse} />
          <Flex
            w={'100%'}
            h={'100vh'}
            display={'flex'}
            flexDirection={'column'}
          >
            <Header flip={collapse} setflip={setCollapse} />
            <Box
              id="maincontent"
              style={{ marginLeft: collapse ? '75px' : '' }}
            >
              {children}
            </Box>
          </Flex>
        </ProSidebarProvider>
      </Flex>
    </>
  );
};

export default Layout;
