import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Public } from './Routes/Public/Public';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from './Routes/Layout/Layout';
import { Card } from './Components/Card/Card';
import { theme } from './Chakra/Theme';
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Router>
            <Layout></Layout>
            <Public />
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
