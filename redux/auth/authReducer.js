
import {AUTH_LOGIN, AUTH_START, AUTH_SELECT,AUTH_ERROR}  from '../rootAction'

export function authReducer(state = {}, action) {
  var isFetching = false;
  var data = null;
  var text = null;
  var loginUrl = null;
  
  switch (action.type) {
    case AUTH_START:
      var tmpState = Object.assign({}, state, {
        isFetching: true
      })
      return tmpState;
    case AUTH_SELECT:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case AUTH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        text: action.text
      })
    case AUTH_LOGIN:
      return Object.assign({}, state, {
        loginUrl : action.loginUrl
      })
    default:
      return state
  }
}
