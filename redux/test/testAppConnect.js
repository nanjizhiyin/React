import { TestApp }  from './testApp'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RootAction from '../rootAction'
import * as HttpAction from '../httpAction'

function mapStateToProps(state) {
  const { testReducer } = state
  var data = testReducer.data;
  var text = testReducer.text;
  var isFetching = testReducer.isFetching;

  return {
    data : data,
    text : text,
    isFetching : isFetching
  }
}
function mapDispatchToProps(dispatch) {
  return {
    rootAction: bindActionCreators(RootAction, dispatch),
    httpAction: bindActionCreators(HttpAction, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestApp)