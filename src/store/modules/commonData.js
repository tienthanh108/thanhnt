import * as API from 'middleware/api'

export const GET_LIST_INCOME_MONTH = 'GET_LIST_INCOME_MONTH'

export function localDispatch(dispatch, type, payload) {
  dispatch({
    type,
    payload,
  })
}

// ------------------------------------
// Actions
// ------------------------------------

export function getListIncomeMonth() {
  return (dispatch, getState) => {
    if (getState().commonData.incomeMonthList
      && getState().commonData.incomeMonthList.length) {
      return
    }

    API.getListIncomeMonth().then((response) => {
      const incomeMonthList = response.body
      dispatch({
        type: GET_LIST_INCOME_MONTH,
        payload: {
          incomeMonthList,
        },
      })
    })
  }
}

// // ------------------------------------
// // Action Handlers
// // ------------------------------------
const ACTION_HANDLERS = {
  // [LOGIN_SUCCESS]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_INCOME_MONTH]: (state, action) => ({ ...state, ...action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  incomeMonthList: [],
}

export default function commonDataReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
