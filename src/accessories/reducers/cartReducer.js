import localForage from 'localforage'

const ADD_TO_CART = 'ADD_TO_CART'
const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

const initialState = {
  products: []
}

export const addToCart = (item) => (dispatch, getState) => {
  localForage.setItem('cartProducts', [...getState().cart.products, item]).then(() => {
    dispatch({
      type: ADD_TO_CART,
      item
    })
  })
}

export const deleteFromCart = (item) => (dispatch, getState) => {
  localForage.setItem('cartProducts', getState().cart.products.filter(product => product !== item)).then(() => {
    dispatch({
      type: DELETE_FROM_CART,
      item
    })
  })
}

export const fetchCartItems = () => (dispatch) => {
  localForage.getItem('cartProducts').then(cartProducts => {
    dispatch({
      type: FETCH_CART_ITEMS,
      products: cartProducts
    })
  })
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        products: [...state.products, action.item]
      }
    }
    case FETCH_CART_ITEMS: {
        return {
          ...state,
          products: action.products
        }
      }

    case DELETE_FROM_CART: {
      return {
        ...state,
        products: state.products.filter(product => product !== action.item)
      }
    }


    default: {
      return state
    }
  }
}