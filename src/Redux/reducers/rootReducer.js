import { combineReducers } from 'redux'

import userReducer from './userReducer'
import dataReducer from './dataReducer'
import cartReducer from './cartReducer.js'
import userPreferencesReducer from './userPreferencesReducer';

export default combineReducers({
  users: userReducer,
  data: dataReducer,
  cart: cartReducer,
  userPreferences: userPreferencesReducer
})
