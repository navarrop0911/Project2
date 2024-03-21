import React from 'react'
import { render, screen, waitFor, waitForElementToBeRemoved, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CocktailDetails from './CocktailDetails';

test("user should see header with title and search bar", () => {
  render(<App />);
  let TitleName = screen.getByText("Hi Team");
  //let drinkSearch = screen.getByRole('button');
  expect(TitleName).toBeInTheDocument();
  //expect(drinkSearch).toBeInTheDocument();
})
let idNum = 15346;
const server = setupServer(
  rest.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', (req, res, ctx) => {

  return res(ctx.json( {"drinks" : [
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "155 Belmont"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita2"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita3"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita4"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita5"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita6"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita7"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita8"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita9"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita10"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita11"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita12"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita13"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita14"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita15"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita16"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita17"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita18"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita19"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg",
      strDrink: "Margarita20"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita21"
    }
  ]}))
}),
rest.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idNum}`, (req, res, ctx) => {
    return res(ctx.json(  {"drinks" : [
      {
        strDrink: "Margarita30",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strAlcoholic: "Alcoholic",
        strInstructions: "Drink it",
        strIngredient1: "water",
        strIngredient2: "more water",
        strMeasure1: "1 motherload",
        strMeasure2: "fist-full"
      }
    ]})
  )})
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('user should see cocktails with names at home', async () => {
  render(<App />);
    await waitFor(() => screen.getByText('Margarita20'));
    const drinkName = screen.getByText("Margarita2")
    const drinkPic = screen.getByAltText("Margarita20");
    const drinkArray = screen.getAllByRole('img')
    expect(drinkName).toBeInTheDocument();
    expect(drinkPic.src).toContain("https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg")
    expect(drinkArray.length).toBe(20)
})

test('user should see the details including name, type, ingredients, and instructions', async () => {
  render(<App/>)
    const drinkImg = await screen.findByAltText("155 Belmont")
    await act(async() => {
      userEvent.click(drinkImg)
    })
    await waitFor(() => screen.getByText('Margarita30'))
    const drinkName = screen.getByText('Margarita30')
    const drinkPic = screen.getByAltText("No Image Found")
    const drinkType = screen.getByText('Alcoholic')
    const drinkInst = screen.getByText('Drink it')
    const drinkIng = screen.getByText('water')
    const drinkMeas = screen.getByText(': 1 motherload')
    expect(drinkName).toBeInTheDocument();
    expect(drinkPic.src).toContain("https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg");
    expect(drinkType).toBeInTheDocument();
    expect(drinkInst).toBeInTheDocument();
    expect(drinkIng).toBeInTheDocument();
    expect(drinkMeas).toBeInTheDocument();
    expect(drinkType.compareDocumentPosition(drinkInst)).toBe(4);
    expect(drinkIng.compareDocumentPosition(drinkInst)).toBe(4);
})