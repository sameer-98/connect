import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authentication } from './routes/authentication/authentication.component';
import { Registration } from './routes/register/registration.component';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Authentication/>}/>
      <Route path='/register' element={<Registration/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
