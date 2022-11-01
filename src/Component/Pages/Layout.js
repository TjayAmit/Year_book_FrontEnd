import { useState } from 'react';
import { ProSidebarProvider, Box, Flex, useMediaQuery } from '../Packages';
import Header from './Component/Header/Header';
import SidebarComponent from './Component/Sidebar/SidebarComponent';

const Layout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <ProSidebarProvider>
      <Flex>
        <SidebarComponent flip={collapse} />
        <Box
          w="100%"
          h="100%"
          ml={isSmallerThan768 ? '0px' : '260px'}
          transition={'all ease 0.4s'}
          style={{ marginLeft: collapse ? '75px' : '' }}
        >
          <Flex flexDirection={'column'}>
            <Header setflip={setCollapse} />
            <Box mt={'50px'} p={6}>
              {children}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </ProSidebarProvider>
  );
};

export default Layout;
