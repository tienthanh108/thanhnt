import React, { PropTypes } from 'react'
import { connect, Provider } from 'react-redux'
import { Router } from 'react-router'
import { IntlProvider, addLocaleData } from 'react-intl'
import ReactGA from 'react-ga'
import Cookies from 'universal-cookie'
import vi from 'react-intl/locale-data/vi'
import en from 'react-intl/locale-data/en'
import 'bootstrap'
import 'bootstrap-material-design'
import i18n from '../i18n'
import { GA_TRACKING_ID } from '../utils/constants'

ReactGA.initialize(GA_TRACKING_ID, {
  cookieDomain: 'auto',
  debug: true,
})

function getParameterByName(name) {
  const regexS = `[\\?&]${name}=([^&#]*)`
  const regex = new RegExp(regexS)
  const results = regex.exec(window.location.search)
  if (results == null) {
    return ''
  }
  return decodeURIComponent(results[1].replace(/\+/g, ' '))
}

function saveCookies() {
  const cookies = new Cookies()
  const utmSource = getParameterByName('utm_source')
  const utmMedium = getParameterByName('utm_medium')
  const utmContent = getParameterByName('utm_content')
  const utmTerm = getParameterByName('utm_term')
  const utmCampaign = getParameterByName('utm_campaign')


  if (typeof cookies.get('utm_source') === 'undefined' || cookies.get('utm_source') === '') {
    cookies.set('utm_source', utmSource, { path: window.location.path })
  }
  if (typeof cookies.get('utm_medium') === 'undefined' || cookies.get('utm_medium') === '') {
    cookies.set('utm_medium', utmMedium, { path: window.location.path })
  }
  if (typeof cookies.get('utm_content') === 'undefined' || cookies.get('utm_content') === '') {
    cookies.set('utm_content', utmContent, { path: window.location.path })
  }
  if (typeof cookies.get('utm_term') === 'undefined' || cookies.get('utm_term') === '') {
    cookies.set('utm_term', utmTerm, { path: window.location.path })
  }
  if (typeof cookies.get('utm_campaign') === 'undefined' || cookies.get('utm_campaign') === '') {
    cookies.set('utm_campaign', utmCampaign, { path: window.location.path })
  }
}

addLocaleData([...en, ...vi])

function logPageView() {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  saveCookies()
}

const AppContainer = (props) => {
  const { history, routes, routerKey, locale, store } = props
  const initData = {
    key: locale, // to ensure that the app tree re-renders on locale changes
    locale,
    messages: i18n[locale],
  }
  $.material.init()
  return (
    <Provider store={store}>
      <IntlProvider {...initData}>
        <div style={{ height: '100%' }}>
          <Router history={history} key={routerKey} onUpdate={logPageView} >
            { routes }
          </Router>
        </div>
      </IntlProvider>
    </Provider>
  )
}

AppContainer.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  routerKey: PropTypes.number,
  store: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
}

export const mapStateToProps = (state) => ({
  locale: state.locale,
})

export default connect(mapStateToProps)(AppContainer)
