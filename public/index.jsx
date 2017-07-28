import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AuthAppConnect from '../redux/auth/authAppConnect.jsx'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Route } from 'react-router-dom'
import configureStore from './configureStore.jsx'

const store = configureStore()
class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <CookiesProvider>
            <BrowserRouter>
              <Route path="/" component={AuthAppConnect} />
            </BrowserRouter>
          </CookiesProvider>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
