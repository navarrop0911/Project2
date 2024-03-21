import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CocktailContext } from './CocktailContext'

const Header = styled.header`
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
  border-radius: 20px;
`

const Search = styled.input`
text-align: center;
margin-right: -4px;
background-color: rgba(0,0,0,0);
border: 4px solid white;
border-radius: 20px;
border-bottom-right-radius: 0px;
border-top-right-radius: 0px;
`

const SearchBar = () => {
  let {setCocktailList, maxCocktails, nonAlcoholic, setNonAlcoholic} = React.useContext(CocktailContext)
  return(
    <Header>
      <h1 style={{'margin-bottom':'-4px'}}>Drinks</h1>
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
                  .then(limitedData => limitedData.length ? setCocktailList(limitedData) : alert(`No drinks found for query "${search}"`))
                  .catch(error => console.error('Error: ', error))
                }}>Search</Button>
        </nav>
      <Button2 type="button" onClick={() => {
        setNonAlcoholic(!nonAlcoholic)
      }}>Show {nonAlcoholic ? "Alcoholic" : "Non-Alcoholic"}</Button2>
    </Header>
  )
}

export default SearchBar;