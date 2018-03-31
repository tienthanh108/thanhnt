import * as API from 'middleware/api'
// import moment from 'moment'

export const GET_LIST_SERVICE = 'GET_LIST_SERVICE'
export const GET_LIST_SERVICE_ERROR = 'GET_LIST_SERVICE_ERROR'
export const CONTENT = 'CONTENT'

export function getServiceByParName(parName) {
  return (dispatch, getState) => new Promise((resolve) => {
    const lsServices = getState().service.lsServices
    if (lsServices) {
      const contents = lsServices.filter((x) => x.parName === parName)
      if (contents) {
        const content = Object.assign({}, contents[0])
        content.active = true
        dispatch({
          type: CONTENT,
          payload: {
            content,
          },
        })
      }
    }
    resolve()
  })
}

export function initService() {
  return (dispatch) => new Promise((resolve, reject) => {
    API.getServiceByParType('SERVICE').then((response) => {
      const lsServices = response.body
      dispatch({
        type: GET_LIST_SERVICE,
        payload: {
          lsServices,
        },
      })
      if (lsServices) {
        dispatch(getServiceByParName('PELEDGE'))
      }

      resolve()
    }).catch((error) => {
      dispatch({
        type: GET_LIST_SERVICE_ERROR,
        loading: false,
        notificationError: { message: 'global.error' },
        error,
      })
      reject()
    })
  })
}

const ACTION_HANDLERS = {
  [GET_LIST_SERVICE]: (state, action) => ({ ...state, ...action.payload }),
  [CONTENT]: (state, action) => ({ ...state, ...action.payload }),
}

const initialState = {

}

export default function serviceReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
