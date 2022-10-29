import { ChakraProvider, theme, React, Login } from './Component/Packges';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  );
}

export default App;
