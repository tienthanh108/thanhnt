import * as API from 'middleware/api'

export const GET_LIST_PROJECT_GROUP = 'GET_LIST_PROJECT_GROUP'
export const GET_LIST_PROJECT = 'GET_LIST_PROJECT'
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR'
export const VIEW_DETAIL = 'VIEW_DETAIL'
export const GET_PROJECT = 'GET_PROJECT'

export function resetActive(list, id) {
  if (list && list.length > 0) {
    for (let i = 0; i < list.length; i += 1) {
      list[i].active = false
      if (id === list[i].id) {
        list[i].active = true
      }
    }
  }
}

export function getLsProjectByGroupId(id = sessionStorage.getItem('currentType'), page = 0) {
  return (dispatch, getState) => new Promise((resolve) => {
    const projectGroups = getState().project.projectGroups
    resetActive(projectGroups, id)
    dispatch({
      type: GET_LIST_PROJECT_GROUP,
      payload: {
        projectGroups,
      },
    })
    dispatch({
      type: VIEW_DETAIL,
      payload: {
        viewDetail: false,
      },
    })
    const data = {
      pageNumber: page,
      rowsPerPage: 6,
    }
    API.getListProjectOfGroup(data, id).then((response) => {
      const projectGroup = response.body
      const projects = projectGroup ? projectGroup.listProject : []
      sessionStorage.setItem('totalCount', projectGroup.totalCount)
      sessionStorage.setItem('currentType', id)
      document.getElementById('pageNumberProject').value = projectGroup.pageNumber + 1
      dispatch({
        type: GET_LIST_PROJECT,
        payload: {
          projects,
        },
      })
      resolve()
    })
  })
}

export function getDetailProjectById(id) {
  return (dispatch) => {
    API.getDetailProjectById(id).then((response) => {
      const project = response.body
      dispatch({
        type: GET_PROJECT,
        payload: {
          project,
        },
      })
      $('#dlgDetailProject').modal('show')
    })
  }
}

export function initProject() {
  return (dispatch) => new Promise((resolve, reject) => {
    API.getAllProjectGroup().then((response) => {
      const projectGroups = response.body
      dispatch({
        type: GET_LIST_PROJECT_GROUP,
        payload: {
          projectGroups,
        },
      })
      if (projectGroups) {
        dispatch(getLsProjectByGroupId(projectGroups[0].id))
      }
      resolve()
    }).catch((error) => {
      dispatch({
        type: GET_PROJECT_ERROR,
        loading: false,
        notificationError: { message: 'global.error' },
        error,
      })
      reject()
    })
  })
}
const ACTION_HANDLERS = {
  [GET_LIST_PROJECT_GROUP]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_PROJECT]: (state, action) => ({ ...state, ...action.payload }),
  [VIEW_DETAIL]: (state, action) => ({ ...state, ...action.payload }),
  [GET_PROJECT]: (state, action) => ({ ...state, ...action.payload }),
  [GET_PROJECT_ERROR]: (state, action) => ({ ...state, ...action.payload }),
}
const initialState = {
}

export default function projectReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
