import { combineReducers } from 'redux'

import userReducer from './userReducer'
import cartReducer from './cartReducer.js'
import userPreferencesReducer from './userPreferencesReducer';

export default combineReducers({
  users: userReducer,
  cart: cartReducer,
  userPreferences: userPreferencesReducer
})
