import React, {useEffect, useState} from 'react';
// import {CocktailContext} from './CocktailContext';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const Ingredients=styled.div`
  display: flex;
  flex-direction: row;
`

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(196, 164, 132, 0.8);
  `
const Block1 = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 5%`

const Block2 = styled.div`
display: flex;
flex-direction: column;
align-items: baseline
justify-content: center;
padding-top: 35%`

const SubBlock = styled.div`
`

const CocktailDetails = () => {
  const idNumber= useParams();
  const idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  console.log(idNumber.idnumber)
  // const navigate = useNavigate();
  const [cocktailDetails, setCocktailDetails] = useState([])

  useEffect(() => {
    {console.log("Entering useEffect")}
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idNumber.idnumber}`)
    .then(res =>res.json())
    .then(data => setCocktailDetails(data.drinks[0]))
    .catch(error => console.error('Error: ', error))
  }, []);

return(
  <DetailsContainer>
    <Block1>
      <h1>{cocktailDetails.strDrink}</h1>
      <img src={cocktailDetails.strDrinkThumb} alt="No Image Found"/>
    </Block1>

    <Block2>
      <SubBlock>
        <h3>Type:</h3> <p>{cocktailDetails.strAlcoholic}</p>
      </SubBlock>

      <SubBlock>
        <h3>Instructions:</h3> <p>{cocktailDetails.strInstructions}</p>
      </SubBlock>

      <Ingredients>
        {cocktailDetails.strIngredient1 !== null ?
            <p>{cocktailDetails.strIngredient1}</p>
            : <></>
        }
        {cocktailDetails.strMeasure1 !== null ?
          <p>: {cocktailDetails.strMeasure1}</p>
          : <></>}
      </Ingredients>

      <Ingredients>
        {cocktailDetails.strIngredient2 !== null ?
            <p>{cocktailDetails.strIngredient2}</p>
            : <></>
        }
        {cocktailDetails.strMeasure2 !== null ?
          <p>: {cocktailDetails.strMeasure2}</p>
          : <></>}
      </Ingredients>

      <Ingredients>
        {cocktailDetails.strIngredient3 !== null ?
            <p>{cocktailDetails.strIngredient3}</p>
            : <></>
        }
        {cocktailDetails.strMeasure3 !== null ?
          <p>: {cocktailDetails.strMeasure3}</p>
          : <></>}
      </Ingredients>

      <Ingredients>
        {cocktailDetails.strIngredient4 !== null ?
            <p>{cocktailDetails.strIngredient4}</p>
            : <></>
        }
        {cocktailDetails.strMeasure4 !== null ?
          <p>: {cocktailDetails.strMeasure4}</p>
          : <></>}
      </Ingredients>

      <Ingredients>
        {cocktailDetails.strIngredient5 !== null ?
            <p>{cocktailDetails.strIngredient5}</p>
            : <></>
        }
        {cocktailDetails.strMeasure5 !== null ?
          <p>: {cocktailDetails.strMeasure5}</p>
          : <></>}
      </Ingredients>

      <Ingredients>
        {cocktailDetails.strIngredient6 !== null ?
            <p>{cocktailDetails.strIngredient6}</p>
            : <></>
        }
        {cocktailDetails.strMeasure6 !== null ?
          <p>: {cocktailDetails.strMeasure6}</p>
          : <></>}
      </Ingredients>

      <Ingredients>
        {cocktailDetails.strIngredient7 !== null ?
            <p>{cocktailDetails.strIngredient7}</p>
            : <></>
        }
        {cocktailDetails.strMeasure7 !== null ?
          <p>: {cocktailDetails.strMeasure7}</p> : <></>}
      </Ingredients>

      <Ingredients>
        {cocktailDetails.strIngredient8 !== null ?
            <p>{cocktailDetails.strIngredient8}</p>: <></>
        }
        {cocktailDetails.strMeasure8 !== null ?
          <p>: {cocktailDetails.strMeasure8}</p>
          : <></>}
      </Ingredients>

      <Ingredients>
        {cocktailDetails.strIngredient9 !== null ?
            <p>{cocktailDetails.strIngredient9}</p>
            : <></>
        }
        {cocktailDetails.strMeasure9 !== null ?
          <p> {cocktailDetails.strMeasure10}</p>
          : <></>}
      </Ingredients>
    </Block2>
  </DetailsContainer>
)

}

export default CocktailDetails;