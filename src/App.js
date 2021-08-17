import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Public } from './Routes/Public/Public';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from './Routes/Layout/Layout';
import { Card } from './Components/Card/Card';

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundColor: '#eceae9',
        },
      },
    },
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
            <Layout>
              <Card />
            </Layout>
            <Public />
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
