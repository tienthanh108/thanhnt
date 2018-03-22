import superagent from 'superagent'
import { navigateTo } from 'utils/routing'
import { NOTIFICATION_SHOW,
  showLoadingIndicator,
  stopLoadingIndicator,
} from '../store/modules/notification'
import store from '../store/bootStore'

export const URL = `${process.env.DATABASE_URL}`

const TIMEOUT = 300000
const endpointLocation = 'local'

export const urls = {
  remote: {},
  local: {
    getListNews: '/news/',
    showDetailNews: '/news/:id',
    getAllProductTypeGroup: '/productTypeGroup',
    getLsProductTypeByGroupId: '/productTypeGroup/:id',
    getLsProductByTypeId: '/productType/:id',
    getDetailProductById: '/products/:id',
    getAllProjectGroup: '/projectGroup',
    getLsProjectByGroupId: '/projectGroup/:id',
    getDetailProjectById: '/project/:id',
    getBanner: '/initData/bannerImage',
    getInitNews: '/initData/news',
    getAbout: '/initData/aboutUs',
    getInitProducts: '/initData/product',
    getInitProjects: '/initData/project',
  },
}
/**
 * Make a call to Endpoint with specified parameters
 * @param endpoint
 * @param query
 * @param method
 * @param data
 * @param timeout
 * @returns {*}
 */
export function callApi(endpoint, query = {}, method = 'GET',
  data = {}, timeout = TIMEOUT, headerTokenPrefix = 'Bearer', contentType = 'application/json') {
  store.dispatch(showLoadingIndicator())
  let rejectLocal
  let requestLocal
  // Build our url.
  const url = URL + endpoint
  let token = window.sessionStorage.getItem('token')
  if (typeof token === 'undefined' || token === null || headerTokenPrefix === 'Basic') {
    // headerTokenPrefix = 'Basic'
    headerTokenPrefix = ''
    // token = 'ZHJlYW1fYW5vbnltb3VzXzIwMTcyNDA4OkRyZWFtQ1RQd2RfMDgyNDIwMTck'
    token = ''
  }
  token = `${headerTokenPrefix} ${token}`
  const headers = {
    authorization: token,
  }

  if (data === {}) {
    headers['Content-Type'] = 'application/json'
  }

  if (contentType !== 'application/json') {
    headers['Content-Type'] = contentType
  }

  let promise
  try {
    promise = new Promise((resolve, reject) => {
      rejectLocal = reject
      requestLocal = superagent[method.toLowerCase()](url)
        .query(query)
        .send(data)
        .set(headers)
        .timeout(timeout)
        .end((error, res) => {
          if (error) {
            if (error.status === 401 || error.status === 403
              || (error.status === 500 && res.body.exception === 'io.jsonwebtoken.MalformedJwtException')) {
              sessionStorage.clear()
              store.dispatch({
                type: NOTIFICATION_SHOW,
                notificationError: { message: 'global.error.loginExpire' },
                loading: false },
              )
              navigateTo('/')
            }
            reject(res || error)
          } else {
            resolve(res)
          }
          store.dispatch(stopLoadingIndicator())
        })
    })
    promise.abort = function abort() {
      requestLocal.abort()
      rejectLocal()
      store.dispatch(stopLoadingIndicator())
    }
  } catch (e) {
    // do nothing
    store.dispatch(stopLoadingIndicator())
  }
  return promise
}


export function getEndpoint(endpoint) {
  return urls[endpointLocation][endpoint]
}

export function getEndpointImageResource() {
  return `${URL}${getEndpoint('imageResource')}`
}

/**
 * Get list of predefined getListIncomeMonth
 */
export const getListNews = () => callApi(`${getEndpoint('getListNews')}`, null, 'GET', {}, 5000)

export function showDetailNews(id) {
  const endpoint = getEndpoint('showDetailNews').replace(':id', id)
  return callApi(endpoint, null, 'GET')
}

export function getAllProductTypeGroup() {
  const endpoint = getEndpoint('getAllProductTypeGroup')
  return callApi(endpoint, null, 'GET')
}

export function getLsProductTypeByGroupId(id) {
  const endpoint = getEndpoint('getLsProductTypeByGroupId').replace(':id', id)
  return callApi(endpoint, null, 'GET')
}

export function getLsProductByTypeId(id) {
  const endpoint = getEndpoint('getLsProductByTypeId').replace(':id', id)
  return callApi(endpoint, null, 'GET')
}

export function getDetailProductById(id) {
  const endpoint = getEndpoint('getDetailProductById').replace(':id', id)
  return callApi(endpoint, null, 'GET')
}

export function getAllProjectGroup() {
  const endpoint = getEndpoint('getAllProjectGroup')
  return callApi(endpoint, null, 'GET')
}

export function getLsProjectByGroupId(id) {
  const endpoint = getEndpoint('getLsProjectByGroupId').replace(':id', id)
  return callApi(endpoint, null, 'GET')
}

export function getDetailProjectById(id) {
  const endpoint = getEndpoint('getDetailProjectById').replace(':id', id)
  return callApi(endpoint, null, 'GET')
}
export function getBanner() {
  const endpoint = getEndpoint('getBanner')
  return callApi(endpoint, null, 'GET')
}
export function getInitNews() {
  const endpoint = getEndpoint('getInitNews')
  return callApi(endpoint, null, 'GET')
}
export function getInitProducts() {
  const endpoint = getEndpoint('getInitProducts')
  return callApi(endpoint, null, 'GET')
}
export function getInitProjects() {
  const endpoint = getEndpoint('getInitProjects')
  return callApi(endpoint, null, 'GET')
}
export function getAbout() {
  const endpoint = getEndpoint('getAbout')
  return callApi(endpoint, null, 'GET')
}

export default callApi