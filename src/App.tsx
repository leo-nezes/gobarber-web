import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';

import Routes from './Routes';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyles />
  </BrowserRouter>
);

export default App;
