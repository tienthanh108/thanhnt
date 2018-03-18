
// Constants
export const LOCALE_CHANGE = 'LOCALE_CHANGE'
export const constants = {
  LOCALE_CHANGE,
}

export function localeChange(lang) {
  return {
    type: LOCALE_CHANGE,
    payload: lang,
  }
}


// Initial state
const ACTION_HANDLERS = {
  [LOCALE_CHANGE]: (state, action) => action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 'vi'
export default function localeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
