import ReactDOM from 'react-dom' ;
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import DevTools from './DevTools'
import AuthApp from '../redux/auth/authApp'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Route } from 'react-router-dom'

const store = configureStore()
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <CookiesProvider>
            <BrowserRouter>
              <Route path="/" component={AuthApp} />
            </BrowserRouter>
          </CookiesProvider>
          <DevTools />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
