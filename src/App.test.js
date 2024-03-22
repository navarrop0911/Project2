import React from 'react'
import { render, screen, waitFor, waitForElementToBeRemoved, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

test("user should see header with title and search bar", () => {
  render(<App />);
  let TitleName = screen.getByText("Drinks");
  let drinkSearch = screen.getByRole('button', {name: 'Search'});
  expect(TitleName).toBeInTheDocument();
  expect(drinkSearch).toBeInTheDocument();
})

let idNum = 15346;
let search = 'Margarita';
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
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita22"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita23"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita24"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita25"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita26"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita27"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita28"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita29"
    },
    {
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
      strDrink: "Margarita30"
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
  )}),
  rest.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`, (req, res, ctx) => {
    return res(ctx.json({"drinks" : [
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Margarita1"
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
      }
    ]}))
  }
    )
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
    expect(drinkArray.length).toBe(30)
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

test('user should be able to go back to the home page after viewing drink details', async() => {
  render(<App/>)
  let titleName = 'Drinks';
  const homeButton = await screen.findByRole('button', {name: 'Back to Home'});
  await act(async() => {userEvent.click(homeButton) });
  await waitFor(() => screen.getByText(titleName));
  const searchButton = await screen.findByRole('button', {name: 'Search'});
  expect(searchButton).toBeInTheDocument();
})

test('user should be able to search for drinks and see corresponding filtered results', async () => {
  render(<App />)
  let drinkSearch = screen.getByRole('button', {name: 'Search'});
  userEvent.type(screen.getByRole('textbox'), 'Margarita')
  expect(drinkSearch).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toHaveValue('Margarita')
})
