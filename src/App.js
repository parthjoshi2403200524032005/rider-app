import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './project/home';
import Login from './project/login';
import Shoping from './project/shoping';


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