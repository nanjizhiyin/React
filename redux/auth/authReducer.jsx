
import {AUTH_LOGIN, AUTH_START, AUTH_SELECT,AUTH_ERROR}  from '../rootAction'

export function authReducer(state = {}, action) {
  
  switch (action.type) {
    case AUTH_START:
      var tmpState = Object.assign({}, state, {
        isFetching: true
      })
      return tmpState;
    case AUTH_SELECT:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        text: null,
        loginUrl:null
      })
    case AUTH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        text: action.text,
        loginUrl:null
      })
    case AUTH_LOGIN:
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        text: null,
        loginUrl : action.loginUrl
      })
    default:
      return state
  }
}
