// import * as API from 'middleware/api'
//
// export const GET_PARAMS_HOME = 'GET_PARAMS_HOME'
//
// export function getHomeParams() {
//   return (dispatch) => {
//     API.getHomeParams().then((response) => {
//       const homeParams = response.body
//       dispatch({
//         type: GET_PARAMS_HOME,
//         payload: {
//           homeParams,
//         },
//       })
//     })
//   }
// }
//
//
// const ACTION_HANDLERS = {
//   [GET_PARAMS_HOME]: (state, action) => ({ ...state, ...action.payload }),
// }
//
// const initialState = {
//
// }
//
// export default function homeReducer(state = initialState, action) {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }
