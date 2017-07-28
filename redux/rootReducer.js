import { combineReducers } from 'redux'
import { navReducer } from './nav/navReducer'
import { homeReducer } from './home/homeReducer'
import { testReducer } from './test/testReducer'
import { authReducer } from './auth/authReducer.jsx'
const rootReducers = combineReducers({
  authReducer,
  navReducer,
  homeReducer,
  testReducer
})

export default rootReducers
