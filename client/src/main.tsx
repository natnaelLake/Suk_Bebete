import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './apps';

import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
