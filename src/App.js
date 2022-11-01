// import { Box, Login } from './Component/Packages';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import RouteComponent from './Component/Route/RoutesComponent.js';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <RouteComponent />
    </ChakraProvider>
  );
}

export default App;
