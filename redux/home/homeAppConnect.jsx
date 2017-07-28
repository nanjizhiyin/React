import { HomeApp } from './homeApp.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RootAction from '../rootAction.jsx'
import * as HttpAction from '../httpAction.jsx'

function mapStateToProps (state) {
  const { homeReducer } = state
  var data = homeReducer.data
  var text = homeReducer.text
  var isFetching = homeReducer.isFetching

  return {
    data : data,
    text : text,
    isFetching : isFetching
  }
}
function mapDispatchToProps (dispatch) {
  return {
    rootAction: bindActionCreators(RootAction, dispatch),
    httpAction: bindActionCreators(HttpAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeApp)
