import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Ecommerce } from './Ecommerce';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Ecommerce />
      </BrowserRouter>
    </Provider> 
  </React.StrictMode>
);
