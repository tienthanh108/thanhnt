
export const HANLE_SHOW_MENU = 'HANLE_SHOW_MENU'
export const HANLE_HIDE_MENU = 'HANLE_HIDE_MENU'

export function showMenu() {
  return {
    type: HANLE_SHOW_MENU,
  } // dispatch just return object
}

export function hideMenu() {
  return {
    type: HANLE_HIDE_MENU,
  } // dispatch just return object
}

const initialState = {
  isVisible: false,
}

export default function menuReducer(state = initialState, action) {
  if (action.type === HANLE_SHOW_MENU) {
    return {
      isVisible: true,
    }
  } else if (action.type === HANLE_HIDE_MENU) {
    return {
      isVisible: false,
    }
  }

  return state
}
