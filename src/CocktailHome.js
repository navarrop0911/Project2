import React, { useContext } from 'react';
import { CocktailContext } from './CocktailContext';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const DrinkContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
background-color: rgba(196, 164, 132, 0.8);
`

const DrinkImage = styled.img`
  max-width: 300px;
  border-radius: 50px;

  &:hover {
    border: solid white 5px;
  }
`

const DrinkUnit = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
text-align: center;
font-weight: bold;
padding: 10px;
font-size: large;
`

const CocktailHome = () => {
    const {cocktailList} = useContext(CocktailContext);

    return(
      <>
      <SearchBar></SearchBar>
      <DrinkContainer>
        {cocktailList.map((drink, index) => {
            return(
            <DrinkUnit key={index}>
              <Link to={`/id/${drink.idDrink}`}>
                <DrinkImage src={drink.strDrinkThumb} alt={drink.strDrink}/>
              </Link>
                <p>{drink.strDrink}</p>
            </DrinkUnit>
            )
        })}
      </DrinkContainer>
      </>
    )
}


export default CocktailHome