import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import 'slick-carousel'
import 'jquery-match-height'
import './utils/jquery.dotdotdot.js'
// http://stackoverflow.com/questions/40897966/objects-are-not-valid-as-a-react-child-in-internet-explorer-11-for-react-15-4-1
import { browserHistory } from 'utils/routing'
import { syncHistoryWithStore } from 'react-router-redux'
import store from 'store/bootStore'
import AppContainer from './containers/AppContainer'

// ========================================================
// Browser History Setup
// ========================================================

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
})

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    // window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = (routerKey = null) => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer
      store={store}
      history={history}
      routes={routes}
      routerKey={routerKey}
    />,
    MOUNT_NODE,
  )
}

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react').default

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  }
  render = () => {
    try {
      renderApp(Math.random())
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept(['./routes/index'], () => render())
}

// ========================================================
// Go!
// ========================================================
// All modern browsers, expect `Safari`, have implemented
// the `ECMAScript Internationalization API`.
// For that we need to patch in on runtime.

if (!global.Intl) {
  require.ensure(['intl'], (require) => {
    require('intl');
    render();
  }, 'IntlBundle');
} else {
  render();
}
