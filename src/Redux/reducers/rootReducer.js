import { combineReducers } from 'redux'

import userReducer from './userReducer'
import cartReducer from './cartReducer.js'

export default combineReducers({
  users: userReducer,
  cart: cartReducer,
})
