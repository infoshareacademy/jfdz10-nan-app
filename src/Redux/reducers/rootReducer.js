import { combineReducers } from 'redux'

import userReducer from './userReducer'
import dataReducer from './dataReducer'
import cartReducer from './cartReducer.js'

export default combineReducers({
  users: userReducer,
  data: dataReducer,
  cart: cartReducer,
})
