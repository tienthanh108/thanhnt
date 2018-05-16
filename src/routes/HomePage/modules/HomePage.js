import * as API from 'middleware/api'

export const ABOUT_US_PATH = 'ABOUT_US_PATH'
export const NEWS_PATH = 'NEWS_PATH'
export const NEWS_LIST = 'NEWS_LIST'
export const PRODUCTS_TYPE_GROUP_LIST = 'PRODUCTS_TYPE_GROUP_LIST'
export const PROJECT_LIST = 'PROJECT_LIST'
export const ABOUT = 'ABOUT'

export function getImageHome() {
  return (dispatch) => {
    API.getImageHome().then((response) => {
      const imageHome = response.body
      dispatch({
        type: ABOUT_US_PATH,
        payload: {
          aboutImagePath: imageHome ? imageHome[0].parValue : '',
        },
      })
      dispatch({
        type: NEWS_PATH,
        payload: {
          newsPath: imageHome ? imageHome[1].parValue : '',
        },
      })
    })
  }
}

export function getInitNewsInHome() {
  return (dispatch) => {
    API.getInitNewsInHome().then((response) => {
      const news = response.body
      dispatch({
        type: NEWS_LIST,
        payload: {
          news,
        },
      })
    })
  }
}

export function getAllProductTypeGroup() {
  return (dispatch) => {
    API.getAllProductTypeGroup().then((response) => {
      let productTypeGroups = response.body
      if (productTypeGroups && productTypeGroups.length > 6) {
        productTypeGroups = productTypeGroups.slice(0, 5)
      }
      dispatch({
        type: PRODUCTS_TYPE_GROUP_LIST,
        payload: {
          productTypeGroups,
        },
      })
    })
  }
}

export function getInitProjectInHome() {
  return (dispatch) => {
    API.getInitProjectInHome().then((response) => {
      const projects = response.body
      dispatch({
        type: PROJECT_LIST,
        payload: {
          projects,
        },
      })
    })
  }
}

export function getInitAboutInHome() {
  return (dispatch) => {
    API.getInitAboutInHome().then((response) => {
      const abouts = response.body
      let about = {}
      if (abouts) {
        about = abouts ? abouts[0] : {}
        about.subtitle = about.subtitle ? about.subtitle : about.content.substring(0, 200)
      }
      dispatch({
        type: ABOUT,
        payload: {
          about,
        },
      })
    })
  }
}

export function initHomePage() {
  return (dispatch) => new Promise((resolve) => {
    dispatch(getImageHome())
    dispatch(getInitNewsInHome())
    dispatch(getAllProductTypeGroup())
    dispatch(getInitProjectInHome())
    dispatch(getInitAboutInHome())
    resolve()
  })
}


const ACTION_HANDLERS = {
  [ABOUT_US_PATH]: (state, action) => ({ ...state, ...action.payload }),
  [NEWS_PATH]: (state, action) => ({ ...state, ...action.payload }),
  [NEWS_LIST]: (state, action) => ({ ...state, ...action.payload }),
  [PRODUCTS_TYPE_GROUP_LIST]: (state, action) => ({ ...state, ...action.payload }),
  [PROJECT_LIST]: (state, action) => ({ ...state, ...action.payload }),
  [ABOUT]: (state, action) => ({ ...state, ...action.payload }),
}

const initialState = {

}

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
