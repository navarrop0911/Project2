import { rest } from 'msw';

let nonAlcoholic= true;
//`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${nonAlcoholic ? 'a=Non_Alcoholic' : 'c=Cocktail'}

export const filterHandlers = [
  rest.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', (req, res, ctx) => {
    return res(ctx.json( {"drinks" : [
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Afterglow"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Banana Milkshake"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Hot Chocolate"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Tropical Fruit Punch"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Virgin Strawberry Daiquiri"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Virgin Piña Colada"
      }
    ]})
  )}),
  rest.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${nonAlcoholic ? 'a=Non_Alcoholic' : 'c=Cocktail'}`, (req, res, ctx) => {
    return res(ctx.json({"drinks" : [
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Afterglow"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Banana Milkshake"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Hot Chocolate"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Tropical Fruit Punch"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Virgin Strawberry Daiquiri"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Virgin Piña Colada"
      }
    ]})
  )})
]