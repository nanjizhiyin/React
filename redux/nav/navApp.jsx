import React, { Component } from 'react'
import { NAV_START, NAV_SELECT } from '../rootAction.jsx'
import { object, string, bool } from 'prop-types'

export class NavApp extends Component {
  static propTypes = {
    rootAction: object,
    httpAction: object,
    text: string,
    data: object,
    isFetching: bool
  }
  constructor (props) {
    super(props)
    document.title = '教辅机构'
  }
  componentDidMount () {
    console.log('=======>NavApp 开始加载数据......')
    const { rootAction } = this.props
    rootAction.rootStart(NAV_START)
  }
  componentWillReceiveProps () {

  }
  render () {
    const { data, text, isFetching, httpAction } = this.props
    // 总数量
    var totalItems = null
    // 数据列表
    var items = null
    // 应该显示的内容
    let html = null

    if (isFetching) {
      // 显示刷新并请求数据
      httpAction.dictionaryGET(NAV_SELECT, 'textbookunit')
      html = <h2>Loading...</h2>
    } else if (data) {
      // 显示加载的数据
      totalItems = data['totalItems']
      items = data['items']
      let liList = items.map((item, i) =>
        <li key={i}>{item['unitID']} --- {item['unitName']}</li>
      )
      html = <div>
        <ul>{liList}</ul>
        <span>总数量:{totalItems}</span>
      </div>
    } else if (text) {
      html = <div>{text}</div>
    }
    return (
      <div>
        {html}
      </div>
    )
  }
}
