import React, { Component, PropTypes } from 'react'
import {NAV_START,NAV_SELECT}  from '../rootAction'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export class NavApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('=======>NavApp 开始加载数据......');
    const { rootAction } = this.props
    rootAction.rootStart(NAV_START)
    
  }
  componentWillReceiveProps() {

  }
  render () {
    const { data, text,isFetching ,dispatch,httpAction} = this.props
                        console.log("=======>isFetching:"+isFetching)
                        console.log("=======>data:"+data)
                        console.log("=======>text:"+text)
        //总数量
    var totalItems = null;
    //数据列表
    var items = null;

    if (isFetching){
      httpAction.dictionaryGET(NAV_SELECT,"textbookunit")
    }else if (data){
      totalItems = data["totalItems"];
      items = data["items"];
    }
    return (
      <div>
              <h2>教辅机构列表</h2>
        {isFetching &&
          <h2>Loading...</h2>
        }
        {!isFetching && data &&
          <ul>
            {items.map((item, i) =>
              <li key={i}>{item["unitID"]} --- {item["unitName"]}</li>
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
