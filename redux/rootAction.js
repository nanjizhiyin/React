
export const ERROR_START = 'ERROR_START'
export const ERROR_SELECT = 'ERROR_SELECT'
export const ERROR_ERROR = 'ERROR_ERROR'

export const AUTH_START = 'AUTH_START'
export const AUTH_SELECT = 'AUTH_SELECT'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_LOGIN = 'AUTH_LOGIN'

export const NAV_START = 'NAV_START'
export const NAV_SELECT = 'NAV_SELECT'
export const NAV_ERROR = 'NAV_ERROR'

export const HOME_START = 'HOME_START'
export const HOME_SELECT = 'HOME_SELECT'
export const HOME_ERROR = 'HOME_ERROR'

export const TEST_START = 'TEST_START'
export const TEST_SELECT = 'TEST_SELECT'
export const TEST_ERROR = 'TEST_ERROR'

/*
 * action 创建函数
 */

export function rootStart (actionType) {
  return { type: actionType }
}

export function rootSelect (actionType, data) {
  return { type: actionType, data:data }
}

export function rootError (actionType, text) {
  return { type: actionType, text:text }
}
export function rootLogin (loginUrl) {
  console.log('===== > 登录地址:' + loginUrl)
  return { type: AUTH_LOGIN, loginUrl:loginUrl }
}
