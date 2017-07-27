import AuthApp from './authApp.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RootAction from '../rootAction'
import * as HttpAction from '../httpAction'

function mapStateToProps(state) {
  const { authReducer } = state
  return {
    data : authReducer.data,
    text : authReducer.text,
    isFetching : authReducer.isFetching,
    loginUrl : authReducer.loginUrl
  }
}
function mapDispatchToProps(dispatch) {
  return {
    rootAction: bindActionCreators(RootAction, dispatch),
    httpAction: bindActionCreators(HttpAction, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthApp)