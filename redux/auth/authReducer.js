
import {AUTH_LOGIN, AUTH_START, AUTH_SELECT,AUTH_ERROR}  from '../rootAction'

export function authReducer(state = {}, action) {
  var isFetching = false;
  var data = null;
  var text = null;
  var loginUrl = null;
  switch (action.type) {
    case AUTH_START:{
        isFetching = true
    }
    case AUTH_SELECT:{
        data = action.data
    }
    case AUTH_ERROR:{
        text = action.text
    }
    case AUTH_LOGIN:{
        loginUrl = action.loginUrl
    }
  }
  return Object.assign({}, state, {
      isFetching: isFetching,
      text: text,
      loginUrl: loginUrl,
      data: data
    })
}
