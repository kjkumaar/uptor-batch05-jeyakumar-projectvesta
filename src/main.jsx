import React from 'react';  // ✅ ADD THIS (important)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './assets/redux/stores.jsx';
import { ThemeProvider } from './Component/Themecontext.jsx';
import { LoginProvider } from './Component/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <BrowserRouter>
      <Provider store={store}>
        <LoginProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </LoginProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


