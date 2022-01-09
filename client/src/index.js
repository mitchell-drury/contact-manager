import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import ContactPage from './contactPage';
import Login from './login';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='contacts' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


