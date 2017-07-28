import React, { Component } from 'react'
import { TEST_START, TEST_SELECT } from '../rootAction.jsx'
import { object, string, bool } from 'prop-types'

export class TestApp extends Component {
  static propTypes = {
    rootAction: object,
    httpAction: object,
    text: string,
    data: object,
    isFetching: bool
  }
  constructor (props) {
    super(props)
    document.title = '学校列表'
  }
  componentDidMount () {
    console.log('=======>testApp 开始加载数据......')
    const { rootAction } = this.props
    rootAction.rootStart(TEST_START)
  }
  componentWillReceiveProps () {

  }
  render () {
    const { data, text, isFetching, httpAction } = this.props
    // 总数量
    var totalItems = null
    // 数据列表
    var items = null
    if (isFetching) {
      httpAction.dictionaryGET(TEST_SELECT, 'school?page=1&pageSize=10')
    } else if (data) {
      totalItems = data['totalItems']
      items = data['items']
    }
    console.log('=======>总数量totalItems:' + totalItems)
    return (
      <div>
        <h2>学校列表</h2>
        {isFetching &&
          <h2>Loading...</h2>
        }
        {!isFetching && data &&
          <ul>
            {items.map((item, i) =>
              <li key={i}>{item['schoolID']} --- {item['schoolName']}</li>
            )}
          </ul>
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
