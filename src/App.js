// import { Box, Login } from './Component/Packages';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import RouteComponent from './Component/Route/RoutesComponent.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        900: '#120e63',
        800: '#3d37ac',
      },
      secondary: {
        900: '#4a5568',
        800: '#b8bbc1',
      },
      light: {
        900: '#ffffff',
      },
      dark: {
        900: '#000000',
      },
    },
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <RouteComponent />
      </Router>
    </ChakraProvider>
  );
}

export default App;
