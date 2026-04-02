import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './style/styles.scss';
import { ToastContainer } from 'react-toastify';
import reduxStore from './toolkit/store.js';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={reduxStore}>
        <App />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
