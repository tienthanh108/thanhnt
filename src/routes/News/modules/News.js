import * as API from 'middleware/api'
import moment from 'moment'

export const GET_LIST_NEWS = 'GET_LIST_NEWS'
export const GET_LIST_NEWS_ERROR = 'GET_LIST_NEWS_ERROR'
export const DETAIL_NEWS = 'DETAIL_NEWS'

export function getListNews(page = 0) {
  return (dispatch) => {
    const data = {
      pageNumber: page,
      rowsPerPage: 6,
    }
    API.getListNews(data).then((response) => {
      const news = response.body
      sessionStorage.setItem('totalCount', news.totalCount)
      document.getElementById('pageNumberNews').value = news.pageNumber + 1
      dispatch({
        type: GET_LIST_NEWS,
        payload: {
          newsList: news.listNews,
        },
      })
    })
  }
}

export function showDetailNews(newId) {
  return (dispatch) => {
    API.showDetailNews(newId).then((response) => {
      const detailNews = response.body
      if (detailNews.create_time) {
        detailNews.createDate = moment(new Date(detailNews.create_time)).format('DD/MM/YYYY')
      }
      dispatch({
        type: DETAIL_NEWS,
        payload: {
          detailNews,
        },
      })
    })
  }
}

const ACTION_HANDLERS = {
  [GET_LIST_NEWS]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_NEWS_ERROR]: (state, action) => ({ ...state, ...action.payload }),
  [DETAIL_NEWS]: (state, action) => ({ ...state, ...action.payload }),

}

const initialState = {

}

export default function newsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
