import React from 'react';
import Innehåll from '../innehållet/quizInnehåll.jsx';

import { Outlet, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>
   
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Innehåll />
            </>
          }
        />
      </Routes>
      <Outlet />
      
    </>
  );
};

export default Home;

