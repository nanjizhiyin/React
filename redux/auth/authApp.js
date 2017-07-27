import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie'
import {AUTH_START,AUTH_SELECT}  from '../rootAction'
import NavAppConnect  from '../nav/navAppConnect'
import HomeAppConnect from '../home/homeAppConnect'
import TestAppConnect from '../test/testAppConnect'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class AuthApp extends Component {
  
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { rootAction ,cookies} = this.props
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
    const {data, text,loginUrl,isFetching ,dispatch,httpAction} = this.props;
    var liList = null;
    if (isFetching){
        httpAction.itembankGET(AUTH_SELECT,"user/permission")
    }
    else if (data){
      liList = data.map((item, i) =>{
                        var tmpID = item["platformShortName"];
                        var tmpName = item["platformName"];
                        return <li key={tmpID}><Link to={tmpID}>{tmpName}</Link></li>
                      }
                      )
    }
    else if (loginUrl){
      console.log("=======>正在打开登录地址 = "+loginUrl)
        self.location = loginUrl;
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

export default withCookies(AuthApp)