import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
<<<<<<< HEAD
import rootReducer from './rootReducer'
=======
import rootReducer from './Redux/reducers/rootReducer'
>>>>>>> develop
import {composeWithDevTools} from 'redux-devtools-extension'


export default function configureStore() {
  const middlewares = [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  return createStore(rootReducer, undefined, composedEnhancers)
}
