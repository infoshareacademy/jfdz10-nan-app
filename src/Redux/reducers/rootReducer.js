import { combineReducers } from 'redux'

import userReducer from './userReducer'
import dataReducer from './dataReducer'

export default combineReducers({
  users: userReducer,
  data: dataReducer
})
