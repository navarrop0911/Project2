import React, {useEffect, useState} from 'react';
// import {CocktailContext} from './CocktailContext';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar'

const Ingredients=styled.div`
  display: flex;
  flex-direction: row;
`

const Image =styled.img`
  border-radius: 50px;`

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(196, 164, 132, 0.8);
  `
const Block1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5%
  `

const Block2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline
  justify-content: center;
  padding-top: 18%;
  row-gap: 3%;
  padding-right: 10%
  `

const SubBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 2px;
  padding: 1%;
  font-size: 20px;
  `


const CocktailDetails = () => {
  const idNumber= useParams();
  const idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  //console.log(idNumber.idnumber)
  // const navigate = useNavigate();
  const [cocktailDetails, setCocktailDetails] = useState([])

  useEffect(() => {
    //{console.log("Entering useEffect")}
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idNumber.idnumber}`)
    .then(res =>res.json())
    .then(data => setCocktailDetails(data.drinks[0]))
    .catch(error => console.error('Error: ', error))
  }, []);

return(
  <>
  <SearchBar></SearchBar>
  <DetailsContainer>
    <Block1>
      <h1>{cocktailDetails.strDrink}</h1>
      <Image src={cocktailDetails.strDrinkThumb} alt="No Image Found"/>
    </Block1>

    <Block2>
      <SubBlock>
        <h2>Type:</h2>
        <p>{cocktailDetails.strAlcoholic}</p>
      </SubBlock>

      <SubBlock>
        <h2>Ingredients:</h2>
        <Ingredients>
          {cocktailDetails.strIngredient1 !== null ?
              <p>{cocktailDetails.strIngredient1}</p>
              : <></>
          }
          {cocktailDetails.strMeasure1 === null ? <></>
            : cocktailDetails.strMeasure1 === "" ? <></>
            : <p>: {cocktailDetails.strMeasure1}</p>}
        </Ingredients>

        <Ingredients>
          {cocktailDetails.strIngredient2 !== null ?
              <p>{cocktailDetails.strIngredient2}</p>
              : <></>
          }
          {cocktailDetails.strMeasure2 === null ? <></>
            : cocktailDetails.strMeasure2 === "" ? <></>
            : <p>: {cocktailDetails.strMeasure2}</p>}
        </Ingredients>

        <Ingredients>
          {cocktailDetails.strIngredient3 !== null ?
              <p>{cocktailDetails.strIngredient3}</p>
              : <></>
          }
          {cocktailDetails.strMeasure3 === null ? <></>
            : cocktailDetails.strMeasure3 === "" ? <></>
            : <p>: {cocktailDetails.strMeasure3}</p>}
        </Ingredients>

        <Ingredients>
        {cocktailDetails.strIngredient4 !== null ?
              <p>{cocktailDetails.strIngredient4}</p>
              : <></>
          }
          {cocktailDetails.strMeasure4 === null ? <></>
            : cocktailDetails.strMeasure4 === "" ? <></>
            : <p>: {cocktailDetails.strMeasure4}</p>}
        </Ingredients>

        <Ingredients>
        {cocktailDetails.strIngredient5 !== null ?
              <p>{cocktailDetails.strIngredient5}</p>
              : <></>
          }
        {cocktailDetails.strMeasure5 === null ? <></>
          : cocktailDetails.strMeasure5 === "" ? <></>
          : <p>: {cocktailDetails.strMeasure5}</p>
        }
        </Ingredients>

        <Ingredients>
        {cocktailDetails.strIngredient6 !== null ?
              <p>{cocktailDetails.strIngredient6}</p>
              : <></>
          }
        {cocktailDetails.strMeasure6 === null ? <></>
            : cocktailDetails.strMeasure6 === "" ? <></>
            : <p>: {cocktailDetails.strMeasure6}</p>
        }
        </Ingredients>

        <Ingredients>
        {cocktailDetails.strIngredient7 !== null ?
              <p>{cocktailDetails.strIngredient7}</p>
              : <></>
          }
        {cocktailDetails.strMeasure7 === null ? <></>
          : cocktailDetails.strMeasure7 === "" ? <></>
          : <p>: {cocktailDetails.strMeasure7}</p>
        }
        </Ingredients>

        <Ingredients>
        {cocktailDetails.strIngredient8 !== null ?
              <p>{cocktailDetails.strIngredient8}</p>
              : <></>
          }
        {cocktailDetails.strMeasure8 === null ? <></>
          : cocktailDetails.strMeasure8 === "" ? <></>
          : <p>: {cocktailDetails.strMeasure8}</p>
        }
        </Ingredients>

        <Ingredients>
        {cocktailDetails.strIngredient9 !== null ?
              <p>{cocktailDetails.strIngredient9}</p>
              : <></>
          }
        {cocktailDetails.strMeasure9 === null ? <></>
            : cocktailDetails.strMeasure9 === "" ? <></>
            : <p>: {cocktailDetails.strMeasure9}</p>
        }
        </Ingredients>
      </SubBlock>

      <SubBlock>
        <h2>Instructions:</h2>
        <p>{cocktailDetails.strInstructions}</p>
      </SubBlock>

    </Block2>
  </DetailsContainer>
  </>
)

}

export default CocktailDetails;