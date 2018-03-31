// We only need to import the modules necessary for initial render
import { showNotification } from 'store/modules/notification'
import HomePage from './HomePage'
import About from './About'
import Products from './Products'
import News from './News'
import Projects from './Projects'
import Service from './Service'
import ContactUs from './ContactUs'
import PageNotFound from './PageNotFound'
import CoreLayout from '../layouts/CoreLayout'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

const protectSubmittedAppPages = [
  '/details',
]

const protectSubmittedDocPages = protectSubmittedAppPages.concat(['/documents'])

const requiredLoginPages = protectSubmittedDocPages.concat(['/track', '/thank-you'])

export function containsPath(protectedPages, path) {
  for (let i = 0; i < protectedPages.length; i += 1) {
    if (path.indexOf(protectedPages[i]) >= 0) {
      return true
    }
  }
  return false
}

export function protectRoute(nextState, replace, cb, store) {
  const token = sessionStorage.getItem('token')
  const pathname = nextState.location.pathname

  // Does not load the application if the the user is not in a protected page
  if (!containsPath(requiredLoginPages, pathname)) {
    cb()
    return
  }

  if (!token) {
    // redirect to home page if the user entering to a protected page
    store.dispatch(showNotification({ notificationError: { message: 'global.error.loginExpire' } }))
    replace({ pathname: '/' })
    cb()
  }
}
export const createRoutes = (store) => ({
  // path: '/',
  path: '/',
  onEnter: (nextState, replace, cb) => {
    protectRoute(nextState, replace, cb, store)
  },
  onChange: (prevState, nextState, replace, cb) => {
    protectRoute(nextState, replace, cb, store)
  },
  component: CoreLayout,
  indexRoute: HomePage,
  childRoutes: [
    HomePage,
    About,
    Products,
    News,
    Projects,
    Service,
    ContactUs,
    {
      path: '*',
      component: PageNotFound,
    },
  ],
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
