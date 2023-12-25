import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Project online store/Home';
import Login from './Project online store/login/login';
import Shoping from './Project online store/shoping';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="login" element={<Login />} />
          <Route path='Shoping' element={<Shoping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
