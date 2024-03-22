import { rest } from 'msw';


let idNum = 15346;
let search = 'Margarita';

export const handlers = [
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
    ]})
  )}),
  rest.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic', (req, res, ctx) => {
    return res(ctx.json({"drinks" : [
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Afterglow",
        strAlcoholic: "Non alcoholic"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Banana Milkshake",
        strAlcoholic: "Non alcoholic"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Hot Chocolate",
        strAlcoholic: "Non alcoholic"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Tropical Fruit Punch",
        strAlcoholic: "Non alcoholic"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Virgin Strawberry Daiquiri",
        strAlcoholic: "Non alcoholic"
      },
      {
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        strDrink: "Virgin Piña Colada",
        strAlcoholic: "Non alcoholic"
      }
    ]})
  )})
]