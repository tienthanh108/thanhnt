import * as API from 'middleware/api'

export const ABOUT_US_PATH = 'ABOUT_US_PATH'
export const NEWS_PATH = 'NEWS_PATH'
export const NEWS_LIST = 'NEWS_LIST'
export const PRODUCTS_LIST = 'PRODUCTS_LIST'
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

export function getInitProductInHome() {
  return (dispatch) => {
    API.getInitProductInHome().then((response) => {
      let products = response.body
      if (products && products.length > 6) {
        products = products.slice(0, 5)
      }
      dispatch({
        type: PRODUCTS_LIST,
        payload: {
          products,
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
        about.content = about.content.substring(0, 200)
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
    dispatch(getInitProductInHome())
    dispatch(getInitProjectInHome())
    dispatch(getInitAboutInHome())
    resolve()
  })
}


const ACTION_HANDLERS = {
  [ABOUT_US_PATH]: (state, action) => ({ ...state, ...action.payload }),
  [NEWS_PATH]: (state, action) => ({ ...state, ...action.payload }),
  [NEWS_LIST]: (state, action) => ({ ...state, ...action.payload }),
  [PRODUCTS_LIST]: (state, action) => ({ ...state, ...action.payload }),
  [PROJECT_LIST]: (state, action) => ({ ...state, ...action.payload }),
  [ABOUT]: (state, action) => ({ ...state, ...action.payload }),
}

const initialState = {

}

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
