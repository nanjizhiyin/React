import { combineReducers } from 'redux'
import { navReducer } from './nav/navReducer.jsx'
import { homeReducer } from './home/homeReducer.jsx'
import { testReducer } from './test/testReducer.jsx'
import { authReducer } from './auth/authReducer.jsx'
const rootReducers = combineReducers({
  authReducer,
  navReducer,
  homeReducer,
  testReducer
})

export default rootReducers
