import { combineReducers } from 'redux'
import { navReducer } from './nav/navReducer'
import { homeReducer } from './home/homeReducer'
import { testReducer } from './test/testReducer'
import { authReducer } from './auth/authReducer'
const rootReducers = combineReducers({
  navReducer,
  homeReducer,
  testReducer,
  authReducer
})

export default rootReducers