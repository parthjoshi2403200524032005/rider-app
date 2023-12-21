import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './project/home';
import Login from './project/login';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;