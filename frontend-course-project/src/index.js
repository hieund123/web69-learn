import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// libs
// data
// component
// css
import LayoutAuth from './layouts/auth';
import Login from './components/Login';
import Register from './components/Register';
import Container from './layouts/container';
import Store from './store/Store';
import AuthProtect from './components/AuthProtect';
import Home from './components/Home';
import Message from './components/Message';
import Noti from './components/Noti';
import Me from './components/Me';
import './index.css';
import { mapKeyWithRouter } from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Store>
    <BrowserRouter>
      <Routes>
        {/* For authorization */}
        <Route path={mapKeyWithRouter['HOME']} element={<AuthProtect><Container /></AuthProtect>}>
          <Route path={mapKeyWithRouter['HOME']} element={<Home />} />
          <Route path={mapKeyWithRouter['MESSAGE']} element={<Message />} />
          <Route path={mapKeyWithRouter['NOTI']} element={<Noti />} />
          <Route path={mapKeyWithRouter['ME']} element={<Me />} />
        </Route>
        {/* For un authorization */}
        <Route path='/auth' element={<LayoutAuth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </Store>
);