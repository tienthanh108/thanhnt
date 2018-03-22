import * as API from 'middleware/api'

export const GET_BANNER_FULLFILLED = 'GET_BANNER_FULLFILLED'
export const GET_ABOUT_FULLFILLED = 'GET_ABOUT_FULLFILLED'
export const GET_INITPRODUCT_FULLFILLED = 'GET_INITPRODUCT_FULLFILLED'
export const GET_INITNEWS_FULLFILLED = 'GET_INITNEWS_FULLFILLED'
export const GET_INITPROJECTS_FULLFILLED = 'GET_INITPROJECTS_FULLFILLED'

export function getBanner() {
  return (dispatch) => {
    API.getBanner().then((response) => {
      const banners = response.body
      dispatch({
        type: GET_BANNER_FULLFILLED,
        payload: {
          banners,
        },
      })
    })
  }
}
export function getAbout() {
  return (dispatch) => {
    API.getAbout().then((response) => {
      const about = response.body
      dispatch({
        type: GET_ABOUT_FULLFILLED,
        payload: {
          about,
        },
      })
    })
  }
}
export function getInitProducts() {
  return (dispatch) => {
    API.getInitProducts().then((response) => {
      const initProducts = response.body
      dispatch({
        type: GET_INITPRODUCT_FULLFILLED,
        payload: {
          initProducts,
        },
      })
    })
  }
}
export function getInitNews() {
  return (dispatch) => {
    API.getInitNews().then((response) => {
      const initNews = response.body
      dispatch({
        type: GET_INITNEWS_FULLFILLED,
        payload: {
          initNews,
        },
      })
    })
  }
}
export function getInitProjects() {
  return (dispatch) => {
    API.getInitProjects().then((response) => {
      const initProjects = response.body
      dispatch({
        type: GET_INITPROJECTS_FULLFILLED,
        payload: {
          initProjects,
        },
      })
    })
  }
}


const ACTION_HANDLERS = {
  [GET_BANNER_FULLFILLED]: (state, action) => ({ ...state, ...action.payload }),
  [GET_ABOUT_FULLFILLED]: (state, action) => ({ ...state, ...action.payload }),
  [GET_INITPRODUCT_FULLFILLED]: (state, action) => ({ ...state, ...action.payload }),
  [GET_INITNEWS_FULLFILLED]: (state, action) => ({ ...state, ...action.payload }),
  [GET_INITPROJECTS_FULLFILLED]: (state, action) => ({ ...state, ...action.payload }),
}

const initialState = {

}

export default function coreReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
