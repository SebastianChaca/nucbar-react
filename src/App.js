import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Public } from './Routes/Public/Public';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const theme = extendTheme({
    colors: {
      nucba: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
    },
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Router>
            <Public />
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
