// import * as API from 'middleware/api'

const ACTION_HANDLERS = {

}

const initialState = {
}

export default function aboutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
