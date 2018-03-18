import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer as router } from 'react-router-redux'
import news from '../routes/News/modules/News'
import products from '../routes/Products/modules/Products'
import project from '../routes/Projects/modules/Projects'
import locale from './modules/locale'
import commonData from './modules/commonData'
import notification from './modules/notification'

export const makeRootReducer = (asyncReducers) => combineReducers({
  // Add sync reducers here
  router,
  form: formReducer,
  locale,
  commonData,
  news,
  notification,
  products,
  project,
  ...asyncReducers,
})

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const ejectReducer = (store, key) => {
  delete store.asyncReducers[key]
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
