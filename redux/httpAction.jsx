import { rootSelect, rootError, rootLogin } from './rootAction.jsx'

const headers = {
  'X-Requested-With' : 'XMLHttpRequest'
}
var myInit = {
  method: 'GET',
  headers: headers,
  mode: 'cors',
  cache: 'default',
  credentials: 'include'
}

export function dictionaryGET (actionType, url) {
  return dispatch => {
    return fetch('http://api.xuexindev.com/dictionary-api/' + url, myInit)
      .then(response => response.json())
      .then(json => {
        console.log('=======>返回数据:' + JSON.stringify(json))
        return dispatch(rootSelect(actionType, json))
      })
      .catch(
        error => {
          console.log('=======>返回错误数据:' + error)
          return dispatch(rootError(actionType, '网络错误'))
        }
      )
  }
}
export function itembankGET (actionType, url) {
  return dispatch => {
    return fetch('http://api.xuexindev.com/itembank-api/' + url, myInit)
      .then(function (response) {
        let tmpJson = response.json()
        if (response.status === 401) {
          return tmpJson.then(json => {
            // 去登录
            var loginUrl = json['loginUrl']
            console.log('=======>loginUrl = ' + loginUrl)
            return dispatch(rootLogin(loginUrl))
          }
          )
        } else {
          return tmpJson.then(json => {
            console.log('=======>返回数据:' + JSON.stringify(json))
            return dispatch(rootSelect(actionType, json))
          })
        }
      })
      .catch(error => {
        return dispatch(rootError(actionType, '网络错误' + error))
      }
      )
  }
}

// class DictionaryGET extends Component {

//   render() {
//     const { actionType, url } = this.props
//     return dispatch => {
//       return fetch('http://api.xuexindev.com/dictionary-api/' + url, myInit)
//         .then(response => response.json())
//         .then(json => {
//           console.log('=======>返回数据:' + JSON.stringify(json))
//           return dispatch(rootSelect(actionType, json))
//         })
//         .catch(
//         error => {
//           console.log('=======>返回错误数据:' + error)
//           return dispatch(rootError(actionType, '网络错误'))
//         }
//         )
//     }
//   }
// }
