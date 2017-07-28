import React, { Component } from 'react'
import { object, string, bool } from 'prop-types'
import { HOME_SELECT, HOME_START } from '../rootAction.jsx'
import {
  Link
} from 'react-router-dom'
import $ from 'jquery'

export class HomeApp extends Component {
  static propTypes = {
    rootAction: object,
    httpAction: object,
    text: string,
    data: object,
    isFetching: bool
  }
  constructor (props) {
    super(props)
    $('title').html('权限列表')
  }

  componentDidMount () {
    const { rootAction } = this.props
    rootAction.rootStart(HOME_START)
  }

  componentWillReceiveProps () {

  }
  render () {
    const { data, text, isFetching, httpAction } = this.props
    var liList = null
    if (isFetching) {
      httpAction.itembankGET(HOME_SELECT, 'user/role?group=mana')
    } else if (data) {
      liList = data.items.map((item, i) => {
        var tmpID = item['username']
        var tmpName = item['name']
        return <li key={tmpID}><Link to={tmpID}>{tmpName}</Link></li>
      }
      )
    }
    return (
      <div>
        <h2>角色列表</h2>
        {isFetching &&
          <h2>Loading...</h2>
        }
        {!isFetching && data &&
          <ul>
            {liList}
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
