import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { HOME_SELECT,HOME_START}  from '../rootAction'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class HomeApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { rootAction } = this.props
    rootAction.rootStart(HOME_START)
  }

  componentWillReceiveProps() {

  }
  render () {
    const { data, text,isFetching ,dispatch,httpAction} = this.props
    var liList = null;
    if (isFetching){
      httpAction.itembankGET(HOME_SELECT,"user/role?group=mana")
    }
    else if (data){
      liList = data.items.map((item, i) =>{
                        var tmpID = item["username"];
                        var tmpName = item["name"];
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
