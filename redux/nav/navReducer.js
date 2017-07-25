
import { NAV_START, NAV_SELECT,NAV_ERROR}  from '../rootAction'

export function navReducer(state = {}, action) {
    //console.log("===== > navReducer收到:action.type:"+action.type);
    // console.log("===== >收到数据6 action.text:"+action.text);
    //console.log("===== >收到数据6 action.data:"+action.data);
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
