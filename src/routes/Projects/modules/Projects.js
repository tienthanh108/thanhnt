import * as API from 'middleware/api'
import { navigateTo } from '../../../utils/routing'

export const GET_LIST_PROJECT_GROUP = 'GET_LIST_PROJECT_GROUP'
export const GET_LIST_PROJECT = 'GET_LIST_PROJECT'
export const GET_PROJECT = 'GET_PROJECT'
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR'
export const VIEW_DETAIL = 'VIEW_DETAIL'

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

export function getLsProjectByGroupId(id) {
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

    API.getLsProjectByGroupId(id).then((response) => {
      const projectGroup = response.body
      const projects = projectGroup ? projectGroup.listProject : []
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
        type: VIEW_DETAIL,
        payload: {
          viewDetail: true,
        },
      })
      dispatch({
        type: GET_PROJECT,
        payload: {
          project,
        },
      })
      navigateTo('/projects/detail')
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
  [GET_PROJECT]: (state, action) => ({ ...state, ...action.payload }),
  [VIEW_DETAIL]: (state, action) => ({ ...state, ...action.payload }),
  [GET_PROJECT_ERROR]: (state, action) => ({ ...state, ...action.payload }),
}
const initialState = {
}

export default function projectReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
