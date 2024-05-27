import { createSlice } from '@reduxjs/toolkit';
import  picture from '../image/Redux.png'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [
      {
        id: 1,
        img: picture,
        description: "Описание1",
        author: "Валерий",
        price: 12
      },
      {
        id: 2,
        img: picture,
        description: "Описание2",
        author: "Елизавета",
        price: 124
      },
      {
        id: 3,
        img: picture,
        description: "Описание3",
        author: "Катя",
        price: 43
      },
      {
        id: 4,
        img: picture,
        description: "Описание4",
        author: "Лиза",
        price: 35
      },
      {
        id: 5,
        img: picture,
        description: "Описание5",
        author: "Артем",
        price: 100
      },
      {
        id: 6,
        img: picture,
        description: "Описание6",
        author: "Макс",
        price: 948
      }
    ],

    cartsAbstr: [
      {
        id: 1,
        img: picture,
        description: "cartsAbstr",
        author: "Валерий",
        price: 12
      },
      {
        id: 2,
        img: picture,
        description: "Описание7",
        author: "Елизавета",
        price: 124
      },
    ],

    cartsReal: [
      {
        id: 1,
        img: picture,
        description: "cartsReal",
        author: "Валерий",
        price: 12
      },
    ],

    cartsImpr: [
      {
        id: 1,
        img: picture,
        description: "cartsImpr",
        author: "Валерий",
        price: 12
      },
    ],

    cartsIllustr: [
      {
        id: 1,
        img: picture,
        description: "cartsIllustr",
        author: "Валерий",
        price: 12
      },
    ],
    cartsMin: [
      {
        id: 1,
        img: picture,
        description: "cartsMin",
        author: "Валерий",
        price: 12
      },
    ],
    cartsNatur: [
      {
        id: 1,
        img: picture,
        description: "cartsNatur",
        author: "Валерий",
        price: 12
      },
    ],
    cartsSimv: [
      {
        id: 7549,
        img: picture,
        description: "cartsSimv",
        author: "Валерий",
        price: 12
      },
    ],

    basket:[]
  },
  reducers: {
    removeFromOrder(state, action) {
      state.basket = state.basket.filter(item => item.id !== action.payload.id);
  },

  addCartBasket(state, action) {
      state.basket.push(
        {
          id:action.payload.id,
          description: action.payload.description,
          author: action.payload.author,
          price: action.payload.price
        }
      )
    }
  },
  
});

export const { addCartBasket, removeFromOrder } = cartSlice.actions;
export default cartSlice.reducer;


