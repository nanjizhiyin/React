import { createStore, applyMiddleware ,compose} from 'redux'
var ReduxThunk = require('redux-thunk').default
import { createLogger } from 'redux-logger'
import rootReducer from '../redux/rootReducer'
import DevTools from './DevTools'

const logger = createLogger()

// 这个地方完全可以不用compose，演示一下compose的使用
const enhancer = compose(
  DevTools.instrument()
);
const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
  logger,
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState,enhancer)
}