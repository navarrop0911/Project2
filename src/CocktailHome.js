import React, { useContext } from 'react';
import { CocktailContext } from './CocktailContext';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const DrinkContainer = styled.div`
padding-top: 150px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
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

const Button = styled.button`
  margin-top: 4px;
  border: 4px solid white;
  border-radius: 20px;
`

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url("https://www.shutterstock.com/image-photo/wood-table-top-on-blurred-600nw-1035242845.jpg");
  background-size: cover;
  filter: blur(30px);
`

const CocktailHome = () => {
  document.body.style.color = "white"
    const {maxCocktails, cocktailList, setCocktailList, nonAlcoholic, setNonAlcoholic} = useContext(CocktailContext);
    React.useEffect(() => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${nonAlcoholic ? 'a=Non_Alcoholic' : 'c=Cocktail'}`)
      .then(response => response.json())
      .then(data => data.drinks.slice(0, maxCocktails))
      .then(limitedData => setCocktailList(limitedData))
    }, [nonAlcoholic, maxCocktails, setCocktailList])

    return(
      <>
      <Background/>
      <SearchBar/>
      <DrinkContainer>
        {cocktailList.filter(drink => !nonAlcoholic || drink.strAlcoholic === "Non alcoholic" || !drink.strAlcoholic).map((drink, index) => {
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