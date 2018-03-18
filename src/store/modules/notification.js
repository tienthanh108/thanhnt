export const NOTIFICATION_SHOW = 'NOTIFICATION_SHOW'
export const NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR'
export const NOTIFICATION_DISPATCH = 'NOTIFICATION_DISPATCH'
export const SHOW_LOADING = 'SHOW_LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export function clearNotification() {
  return {
    type: NOTIFICATION_CLEAR,
  }
}

export function showNotification(messageObj) {
  return {
    type: NOTIFICATION_SHOW,
    ...messageObj,
  }
}

export function dispatchNotification(messageObj) {
  return {
    type: NOTIFICATION_DISPATCH,
    ...messageObj,
  }
}

export function showLoadingIndicator() {
  return {
    type: SHOW_LOADING,
  }
}

export function stopLoadingIndicator() {
  return {
    type: STOP_LOADING,
  }
}

const ACTION_HANDLERS = {
  [NOTIFICATION_CLEAR]: (state) => ({
    ...state,
    message: { message: '', values: {} },
    type: '',
  }),
  [SHOW_LOADING]: (state) => ({ ...state, loading: true, loadingCounter: state.loadingCounter + 1 }),
  [STOP_LOADING]: (state) => ({ ...state, loadingCounter: state.loadingCounter - 1 }),
}

const initialState = {
  message: {
    message: '',
    values: {},
  },
  type: '',
  loading: false,
  loadingCounter: 0,
}
export default function notificationReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  let totalLoadingCounter = 0

  let newState = handler ? handler(state, action) : Object.assign({}, state)
  if ('loading' in action) {
    totalLoadingCounter += action.loading ? 1 : -1
    if (totalLoadingCounter < 0) {
      totalLoadingCounter = 0
    }
    newState = { ...newState, loading: totalLoadingCounter !== 0 }
  }
  if ('notificationSuccess' in action) {
    newState = { ...newState, message: action.notificationSuccess, type: 'success' }
  }
  if ('notificationInfo' in action) {
    newState = { ...newState, message: action.notificationInfo, type: 'info' }
  }
  if ('notificationError' in action) {
    newState = { ...newState, message: action.notificationError, type: 'error' }
  }

  if (newState.loadingCounter === 0) {
    newState = { ...newState, loading: false }
  }
  return newState
}
