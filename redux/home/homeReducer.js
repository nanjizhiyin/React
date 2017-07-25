
import { HOME_START, HOME_SELECT,HOME_ERROR}  from '../rootAction'

export function homeReducer(state = {}, action) {
  switch (action.type) {
    case HOME_START:
      var tmpState = Object.assign({}, state, {
        isFetching: true
      })
      return tmpState;
    case HOME_SELECT:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case HOME_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        text: action.text
      })
    default:
      return state
  }
}
