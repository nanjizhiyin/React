
import { NAV_START, NAV_SELECT,NAV_ERROR}  from '../rootAction'

export function navReducer(state = {}, action) {
  switch (action.type) {
    case NAV_START:
      var tmpState = Object.assign({}, state, {
        isFetching: true,
        data: null,
        text: null
      })
      return tmpState;
    case NAV_SELECT:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        text: null
      })
    case NAV_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        text: action.text
      })
    default:
      return state
  }
}
