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
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Store>
    <BrowserRouter>
      <Routes>
        {/* For authorization */}
        <Route path='' element={<Container />}>

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