import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../redux/rootReducer.jsx'
var ReduxThunk = require('redux-thunk').default

const logger = createLogger()

const enhancer = compose(
  // 使用工具Redux-Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
  logger
)(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, enhancer)
}
