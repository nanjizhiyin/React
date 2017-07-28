import { NavApp } from './navApp.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RootAction from '../rootAction.jsx'
import * as HttpAction from '../httpAction.jsx'

function mapStateToProps (state) {
  const { navReducer } = state
  var data = navReducer.data
  var text = navReducer.text
  var isFetching = navReducer.isFetching
  // console.log("===== >收到数据2 data:"+data);
  console.log('===== >收到数据 isFetching:' + isFetching)

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

export default connect(mapStateToProps, mapDispatchToProps)(NavApp)
