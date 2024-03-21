import './App.css';
import React from 'react';
import { CocktailProvider } from './CocktailContext';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CocktailHome from './CocktailHome';
import CocktailDetails from './CocktailDetails';

function App() {
  return(
    <CocktailProvider>
      <Router>
        <Routes>
          <Route path='/' element={<CocktailHome/>} />
          <Route path='/id/:idnumber' element={<CocktailDetails/>} />
          {/* <Route path='/search/results' element={<CocktailSearch/>} /> */}
        </Routes>
      </Router>
    </CocktailProvider>
  )
}

export default App;
