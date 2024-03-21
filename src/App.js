import './App.css';
import React from 'react';
import { CocktailProvider } from './CocktailContext';
import { Routes, Route } from 'react-router-dom';
import CocktailHome from './CocktailHome';
import CocktailDetails from './CocktailDetails';

function App() {
  return(
    <CocktailProvider>
      <Routes>
        <Route path='/' element={<CocktailHome/>} />
        <Route path='/non-alcoholic' element={<CocktailHome/>} />
        <Route path='/id/:idnumber' element={<CocktailDetails/>} />
        {/* <Route path='/search/results' element={<CocktailSearch/>} /> */}
      </Routes>
    </CocktailProvider>
  )
}

export default App;
