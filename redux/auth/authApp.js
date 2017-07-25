import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { instanceOf } from 'prop-types';
import {withCookies, Cookies} from 'react-cookies'
import {AUTH_START,AUTH_SELECT}  from '../rootAction'
import NavAppConnect  from '../nav/navAppConnect'
import HomeAppConnect from '../home/homeAppConnect'
import TestAppConnect from '../test/testAppConnect'
import * as RootAction from '../rootAction'
import * as HttpAction from '../httpAction'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class AuthApp extends Component {
  
  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { rootAction } = this.props
    rootAction.rootStart(AUTH_START)
  }

  componentWillReceiveProps() {

  }
  //点击链接,加载数据
  localComponent({match}){
    var tmpID = match.params.id;
    if (tmpID == "ib_conf"){
      return <NavAppConnect />
    }
    else if (tmpID == "ib_maintain"){
      return <HomeAppConnect />
    }
    else if (tmpID == "ib_import"){
      return <TestAppConnect />
    }
    return (
      <div>
        <h3>未知地址ID: {match.params.id}</h3>
      </div>
    )
  }
  render () {
    const { authenticated,data, text,isFetching ,dispatch,httpAction} = this.props;
    var liList = null;
    if (isFetching){
      //let xtoken = cookie.get("xtoken");
      //console.log('=======>xtoken='+document.cookie);
        httpAction.itembankGET(AUTH_SELECT,"user/permission")
      // //判断是否已经登录
      // if (authenticated){
      //   //已经认证
      //   httpAction.itembankGET(AUTH_SELECT,"user/permission")
      // }
      // else{
      //   //请登录
      //   httpAction.itembankGET(AUTH_SELECT,"logintest")
      // }
    }
    else if (data){
      liList = data.map((item, i) =>{
                        var tmpID = item["platformShortName"];
                        var tmpName = item["platformName"];
                        return <li key={tmpID}><Link to={tmpID}>{tmpName}</Link></li>
                      }
                      )
    }
    return (
      <div>
        {isFetching &&
          <h2>Loading...</h2>
        }
        {!isFetching && data &&
          <Router>
            <div>
              <h2>权限列表</h2>
              <ul>
                {liList}
              </ul>
              <div>-------------------------------</div>
              <Route path="/:id" component={this.localComponent}/>
            </div>
          </Router>
        }
        {!isFetching && text &&
          <div>
          {text}
          </div>
        }
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { authReducer } = state
  var data = authReducer.data;
  var text = authReducer.text;
  var isFetching = authReducer.isFetching;

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
export default connect(mapStateToProps,mapDispatchToProps)(AuthApp)