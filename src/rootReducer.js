import { combineReducers } from 'redux'

import cartReducer from './accessories/reducers/cartReducer.js'


export default combineReducers({
  cart: cartReducer,
})