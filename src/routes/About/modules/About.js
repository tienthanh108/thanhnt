import * as API from 'middleware/api'

export const GET_LIST_PROFILE_TYPE = 'GET_LIST_PROFILE_TYPE'
export const GET_PROFILE = 'GET_PROFILE'
export const GET_PROFILE_2 = 'GET_PROFILE'
export const VIEW_DETAIL = 'VIEW_DETAIL'
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR'

export function getProfilesDetail(id) {
  return (dispatch) => {
    API.getProfilesDetail(id).then((response) => {
      const profile = response.body
      dispatch({
        type: VIEW_DETAIL,
        payload: {
          viewDetail: true,
        },
      })
      dispatch({
        type: GET_PROFILE,
        payload: {
          profile,
        },
      })
    })
  }
}

export function initProfiles() {
  return (dispatch) => new Promise((resolve, reject) => {
    API.getProfiles().then((response) => {
      const lsProfiles = response.body
      dispatch({
        type: GET_LIST_PROFILE_TYPE,
        payload: {
          lsProfiles,
        },
      })
      if (lsProfiles) {
        // lsProfiles.get(0).active = true
        dispatch({
          type: GET_PROFILE_2,
          payload: {
            profile: lsProfiles[0],
          },
        })
      }
      resolve()
    }).catch((error) => {
      dispatch({
        type: GET_PROFILE_ERROR,
        loading: false,
        notificationError: { message: 'global.error' },
        error,
      })
      reject()
    })
  })
}
const ACTION_HANDLERS = {
  [GET_LIST_PROFILE_TYPE]: (state, action) => ({ ...state, ...action.payload }),
  [GET_PROFILE]: (state, action) => ({ ...state, ...action.payload }),
  [GET_PROFILE_2]: (state, action) => ({ ...state, ...action.payload }),
  [GET_PROFILE_ERROR]: (state, action) => ({ ...state, ...action.payload }),
  [VIEW_DETAIL]: (state, action) => ({ ...state, ...action.payload }),

}

const initialState = {
  profile: {},
}

export default function aboutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
