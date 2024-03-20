import React, { createContext, useState, useEffect } from 'react';

export const CocktailContext = createContext();

export const CocktailProvider = ({children}) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [idNumber, setIdNumber] = useState(0);
  // const [limitedCocktails, setLimitedCocktails] = useState([]);
  const maxCocktails = 20;

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(response => response.json())
      .then(data => data.drinks.slice(0, maxCocktails))
      .then(limitedData => setCocktailList(limitedData))
      .catch(error => console.error('Error: ', error))
  }, []);

  return(
    <CocktailContext.Provider value={{cocktailList, setCocktailList, idNumber, setIdNumber}}>
      {children}
    </CocktailContext.Provider>
  )
};

