import React, { Component } from 'react'
import { instanceOf, object, string, bool, array } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { AUTH_START, AUTH_SELECT } from '../rootAction'
import NavAppConnect from '../nav/navAppConnect'
import HomeAppConnect from '../home/homeAppConnect'
import TestAppConnect from '../test/testAppConnect'
import './auth.scss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class AuthApp extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
    rootAction: object,
    httpAction: object,
    text: string,
    data : array,
    loginUrl : string,
    isFetching : bool
  }
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount () {
    const { rootAction, cookies } = this.props
    cookies.set('ssss', 'bbbbb')
    rootAction.rootStart(AUTH_START)
  }

  componentWillReceiveProps () {

  }
  // 点击链接,加载数据
  localComponent ({ match }) {
    let tmpID = match.params.id
    if (tmpID === 'ib_conf') {
      return <NavAppConnect />
    } else if (tmpID === 'ib_maintain') {
      return <HomeAppConnect />
    } else if (tmpID === 'ib_import') {
      return <TestAppConnect />
    }
    return (
      <div>
        <h3>未知地址ID: {match.params.id}</h3>
      </div>
    )
  }
  render () {
    const { data, text, loginUrl, isFetching, httpAction } = this.props
    // 计算数据
    let showBody = null
    if (isFetching) {
      showBody = <h2>Loading...</h2>
      httpAction.itembankGET(AUTH_SELECT, 'user/permission')
    } else if (data) {
      let liList = data.map((item, i) => {
        var tmpID = item['platformShortName']
        var tmpName = item['platformName']
        var tmpSpan = <span key={tmpID}><Link to={tmpID}>{tmpName}</Link>&nbsp;</span>
        if (i > 0 && i % 5 === 0) {
          tmpSpan = <span key={tmpID}><Link to={tmpID}>{tmpName}</Link><br /></span>
        }
        return tmpSpan
      }
      )
      showBody = <Router>
        <div>
          <div className="nav">
            {liList}
          </div>
          <div>-------------------------------</div>
          <div className="back">
            <Route path="/:id" component={this.localComponent} />
          </div>
        </div>
      </Router>
    } else if (text) {
      showBody = <h2>text</h2>
    } else if (loginUrl) {
      console.log('=======>正在打开登录地址 = ' + loginUrl)
      self.location = loginUrl
    }
    return (
      <div>
        {showBody}
      </div>
    )
  }
}

export default withCookies(AuthApp)
