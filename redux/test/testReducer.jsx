
import { TEST_START, TEST_SELECT, TEST_ERROR } from '../rootAction.jsx'

export function testReducer (state = {}, action) {
  switch (action.type) {
    case TEST_START:
      var tmpState = Object.assign({}, state, {
        isFetching: true
      })
      return tmpState
    case TEST_SELECT:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case TEST_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        text: action.text
      })
    default:
      return state
  }
}
