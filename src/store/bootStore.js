import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import { browserHistory } from 'utils/routing'
import makeRootReducer from './reducers'
import { saveState, loadState } from './localStorage'

export function bootStore(initialState = {}, history) {
  // ======================================================
  // Middleware Configuration
  // kkkkk======================================================
  const middleware = [thunk, routerMiddleware(history)]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  )
  store.asyncReducers = {}
  store.subscribe(throttle(() => {
    const { locale } = store.getState()
    saveState({
      locale,
    })
  }, 1000))


  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = makeRootReducer
      store.replaceReducer(reducers)
    })
  }

  return store
}

const initialState = loadState()
const store = bootStore(initialState, browserHistory)
export default store
