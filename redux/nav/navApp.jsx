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
    // this.loadScript() // 动态加载时,layer.load触发要设置延时
  }
  componentDidMount () {
    console.log('=======>NavApp 开始加载数据......')
    const { rootAction } = this.props
    rootAction.rootStart(NAV_START)
  }
  componentWillReceiveProps () {

  }
  // loadScript () {
  //   var script = document.createElement('script')
  //   script.setAttribute('src', 'http://hwr.xuexindev.com/hdrRouter/js/jquery-3.2.1.min.js')
  //   document.body.appendChild(script)

  //   var script2 = document.createElement('script')
  //   script2.setAttribute('src', 'http://hwr.xuexindev.com/hdrRouter/js/layer/layer.js')
  //   document.body.appendChild(script2)
  // }
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

      html = <div>
        <h2>Loadssssss........</h2>
        {
          layer.msg('加载中.....', {
            icon: 16,
            shade: 0.01
          })
        }
      </div>
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
