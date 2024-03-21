import React, { createContext, useState } from 'react';

export const CocktailContext = createContext();

export const CocktailProvider = ({children}) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  const [nonAlcoholic, setNonAlcoholic] = useState(false);
  // const [limitedCocktails, setLimitedCocktails] = useState([]);
  const maxCocktails = 30;

  return(
    <CocktailContext.Provider value={{cocktailList, setCocktailList, idNumber, setIdNumber, maxCocktails, nonAlcoholic, setNonAlcoholic}}>
      {children}
    </CocktailContext.Provider>
  )
};

