import React from 'react'
import { render, screen, waitFor, waitForElementToBeRemoved, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import CocktailHome from './CocktailHome';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';
import { filterHandlers } from './mocks/filterHandlers';
//import { rest } from 'msw';
//npm install msw@v1.3.3
// import { detailsHanders } from './mock/handlers';

// console.log(handlers);

test("user should see header with title and search bar", () => {
  render(<App />);
  let TitleName = screen.getByText("Drinks");
  let drinkSearch = screen.getByRole('button', {name: 'Search'});
  expect(TitleName).toBeInTheDocument();
  expect(drinkSearch).toBeInTheDocument();
})

// let idNum = 15346;
// let search = 'Margarita';
// let nonAlcoholic = false;
// let entry = 0;

const server = setupServer(...handlers)

beforeAll(() => server.listen());
// beforeEach(() => {
//   delete window.location;
//   window.location = new URL('http://localhost:3000/');
// })
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
    await act(async () => {
      userEvent.click(drinkImg)
    })
    await screen.findByText('Margarita30')
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
  userEvent.type(screen.getByRole('textbox'), 'Margarita');
  await act(async() => {userEvent.click(drinkSearch) });
  await waitFor(() => screen.getByText('Margarita5'));
  const drinkName = screen.getByText("Margarita2")
  const drinkPic = screen.getByAltText("Margarita3");
  const drinkArray = screen.getAllByRole('img')
  expect(screen.getByRole('textbox')).toHaveValue('Margarita')
  expect(drinkName).toBeInTheDocument();
  expect(drinkPic.src).toContain("https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg");
  expect(drinkArray.length).toBe(5);
  expect(drinkSearch).toBeInTheDocument();
})


test('user should only see non-alcoholic drinks when selecting the Non-alcoholic filter', async () => {
  server.resetHandlers(filterHandlers);
  render(<App />)
  let nonAlcButton = screen.getByRole('button', {name: 'Show Non-Alcoholic'});
  // let alcButton = screen.getByRole('button', {name: 'Show Alcoholic'});
  act(() => {userEvent.click(nonAlcButton) });
  let alcButton = screen.getByRole('button', {name: 'Show Alcoholic'});
  console.log(alcButton);
  // act(() => {userEvent.click(nonAlcButton) });
  // let nonAlcButton2 = screen.getByRole('button', {name: 'Show Non-Alcoholic'});
  // render(<App />)
  // await screen.findByText('Virgin Strawberry Daiquiri');
  // expect(nonAlcButton).toBeInTheDocument();
  expect(alcButton).toBeInTheDocument();
  expect(nonAlcButton).toBeInTheDocument();
  expect(nonAlcButton.compareDocumentPosition(alcButton)).toBe(0);
})

