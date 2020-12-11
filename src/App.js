import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import store from './store/configureStore';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
