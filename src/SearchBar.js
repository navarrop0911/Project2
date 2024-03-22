import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CocktailContext } from './CocktailContext'



const Header = styled.header`
  font-family: 'Candara';
  border-bottom: 4px solid white;
  position: fixed;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center`

const Button = styled.button`
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: 4px solid white;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
`
const Button2 = styled.button`
  color: white;
  margin-top: 4px;
  margin-bottom: 4px;
  background-color: rgba(0, 0, 0, 0);
  border: 4px solid white;
  border-radius: 20px;`

  const Button3 = styled.button`
color: white;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 4px;
background-color: rgba(0, 0, 0, 0);
border: 4px solid white;
border-radius: 20px;`

const Search = styled.input`
  color: white;
  text-align: center;
  margin-right: -4px;
  background-color: rgba(0,0,0,0);
  border: 4px solid white;
  border-radius: 20px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  `

  const RandomDrink = () => {
    let { randomDrink, setRandomDrink} = React.useContext(CocktailContext);

    useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then (data => setRandomDrink(data.drinks[0]))
    // . then(console.log(randomDrink))
    .catch(error => console.error('Error: ', error))
  }, [setRandomDrink]);

  }

const SearchBar = () => {
  const navigate = useNavigate()
  let {setCocktailList, maxCocktails, nonAlcoholic, setNonAlcoholic} = React.useContext(CocktailContext)
  return(
    <Header>
      <h1 style={{'marginBottom':'-4px'}}>Drinks</h1>
        <nav>
                <Search type="text" placeholder="Search" aria-label="Search" onKeyUp={event => {
                  if(event.key === "Enter"){
                    document.querySelector("button").click()
                  }
                }}/>
                <Button type="button" onClick={() => {
                  let search = document.querySelector("input").value
                  fetch(search ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}` : "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
                  .then(response => response.json())
                  .then(data => search ? data.drinks : data.drinks.slice(0, maxCocktails))
                  .then(limitedData => limitedData ? setCocktailList(limitedData) : alert(`No drinks found for query "${search}"`))
                  .catch(error => console.error('Error: ', error))
                }}>Search</Button>
        </nav>
      <Button2 type="button" onClick={() => {
        navigate(nonAlcoholic ? "/" : "/non-alcoholic")
        setNonAlcoholic(!nonAlcoholic)
      }}>Show {nonAlcoholic ? "Alcoholic" : "Non-Alcoholic"}</Button2>
      <Button3 type="button" onClick={() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then (data => navigate(`/id/${data.drinks[0].idDrink}`))
        .catch(error => console.error('Error: ', error))
      }}>Random Drink</Button3>
    </Header>
  )
}

export default SearchBar;
