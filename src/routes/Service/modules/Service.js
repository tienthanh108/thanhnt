import * as API from 'middleware/api'

export const GET_LIST_SERVICE = 'GET_LIST_SERVICE'
export const GET_LIST_SERVICE_CONTENT = 'GET_LIST_SERVICE_CONTENT'
export const GET_LIST_SERVICE_ERROR = 'GET_LIST_SERVICE_ERROR'
export const GET_LIST_GROUP_DOWNLOAD = 'GET_LIST_GROUP_DOWNLOAD'
export const GET_LIST_DOWNLOAD = 'GET_LIST_DOWNLOAD'
export const GET_LIST_DOWNLOAD_ERROR = 'GET_LIST_DOWNLOAD_ERROR'
export const TYPE_SERVICE = 'TYPE_SERVICE'
export const CONTENT = 'CONTENT'

export function onChangeGroupDownloadById(id) {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    const groupDownloads = getState().service.groupDownloads
    if (groupDownloads) {
      for (let i = 0; i < groupDownloads.length; i += 1) {
        groupDownloads[i].active = false
        if (id === groupDownloads[i].id) {
          groupDownloads[i].active = true
        }
      }
      dispatch({
        type: GET_LIST_GROUP_DOWNLOAD,
        payload: {
          groupDownloads,
        },
      })
    }
    API.getListFileUploadOfGroup(id).then((response) => {
      const downloads = response.body
      dispatch({
        type: GET_LIST_DOWNLOAD,
        payload: {
          downloads,
        },
      })
      resolve()
    }).catch((error) => {
      dispatch({
        type: GET_LIST_DOWNLOAD_ERROR,
        loading: false,
        notificationError: { message: 'global.error' },
        error,
      })
      reject()
    })
  })
}

export function onChangeTypeService(typeService) {
  return (dispatch, getState) => new Promise((resolve) => {
    dispatch({
      type: TYPE_SERVICE,
      payload: {
        typeService,
      },
    })
    const lsServices = getState().service.lsServices
    let items = {}
    if (lsServices) {
      for (let i = 0; i < lsServices.length; i += 1) {
        lsServices[i].active = false
        if (typeService === lsServices[i].parValue) {
          items = lsServices[i]
          lsServices[i].active = true
        }
      }
      dispatch({
        type: GET_LIST_SERVICE,
        payload: {
          lsServices,
        },
      })
    }
    if (typeService !== 'DOWNLOAD') {
      dispatch({
        type: GET_LIST_SERVICE_CONTENT,
        payload: {
          content: items,
        },
      })
    } else {
      API.getGroupFileUploads().then((response) => {
        const groupDownloads = response.body
        dispatch({
          type: GET_LIST_GROUP_DOWNLOAD,
          payload: {
            groupDownloads,
          },
        })
        if (groupDownloads) {
          dispatch(onChangeGroupDownloadById(groupDownloads[0].id))
        }
      })
    }
    resolve()
  })
}

export function initService() {
  return (dispatch) => new Promise((resolve) => {
    API.getServiceByParType('SERVICE').then((response) => {
      const lsServices = response.body ? response.body : []
      dispatch({
        type: GET_LIST_SERVICE,
        payload: {
          lsServices,
        },
      })
      dispatch(onChangeTypeService('PLEDGE'))
    })
    resolve()
  })
}

const ACTION_HANDLERS = {
  [GET_LIST_SERVICE]: (state, action) => ({ ...state, ...action.payload }),
  [CONTENT]: (state, action) => ({ ...state, ...action.payload }),
  [TYPE_SERVICE]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_SERVICE_CONTENT]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_GROUP_DOWNLOAD]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_DOWNLOAD]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_DOWNLOAD_ERROR]: (state, action) => ({ ...state, ...action.payload }),
}

const initialState = {}

export default function serviceReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
