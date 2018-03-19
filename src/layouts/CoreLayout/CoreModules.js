import * as API from 'middleware/api'

export const GET_PARAMS_HOME = 'GET_PARAMS_HOME'

export function getHomeParams() {
  return (dispatch) => {
    API.getHomeParams().then((response) => {
      const homeParams = response.body
      const banners = []
      let peledge = {}
      let recruitment = {}
      for (let i = 0; i < homeParams.length; i += 1) {
        if (homeParams[i].parType === 'BANNER') {
          banners.push(homeParams[i])
        } else if (homeParams[i].parName === 'PELEDGE') {
          peledge = homeParams[i]
        } else if (homeParams[i].parName === 'RECRUITMENT') {
          recruitment = homeParams[i]
        }
      }
      dispatch({
        type: GET_PARAMS_HOME,
        payload: {
          banners,
          peledge,
          recruitment,
        },
      })
    })
  }
}


const ACTION_HANDLERS = {
  [GET_PARAMS_HOME]: (state, action) => ({ ...state, ...action.payload }),
}

const initialState = {

}

export default function coreReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
