import * as API from 'middleware/api'
import { isEmpty } from '../../../utils/commonLogicApp'
// import moment from 'moment'

export const GET_LIST_PRODUCT_TYPE_GROUP = 'GET_LIST_PRODUCT_TYPE_GROUP'
export const GET_LIST_PRODUCT_ERROR = 'GET_LIST_PRODUCT_ERROR'
export const GET_LIST_PRODUCT_TYPE = 'GET_LIST_PRODUCT_TYPE'
export const GET_LIST_PRODUCT = 'GET_LIST_PRODUCT'
export const GET_PRODUCT = 'GET_PRODUCT'
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

export function getLsProductByTypeId(id) {
  return (dispatch, getState) => new Promise((resolve) => {
    const productTypes = getState().products.productTypes
    resetActive(productTypes, id)
    dispatch({
      type: GET_LIST_PRODUCT_TYPE,
      payload: {
        productTypes,
      },
    })
    dispatch({
      type: VIEW_DETAIL,
      payload: {
        viewDetail: false,
      },
    })
    API.getLsProductByTypeId(id).then((response) => {
      const productType = response.body
      const products = productType ? productType.lstProduct : []
      dispatch({
        type: GET_LIST_PRODUCT,
        payload: {
          products,
        },
      })
      resolve()
    })
  })
}

export function getLsProductTypeByGroupId(id) {
  return (dispatch, getState) => new Promise((resolve) => {
    const productTypeGroups = getState().products.productTypeGroups
    resetActive(productTypeGroups, id)
    dispatch({
      type: GET_LIST_PRODUCT_TYPE_GROUP,
      payload: {
        productTypeGroups,
      },
    })
    dispatch({
      type: VIEW_DETAIL,
      payload: {
        viewDetail: false,
      },
    })

    API.getLsProductTypeByGroupId(id).then((response) => {
      const productTypeGroup = response.body
      const productTypes = productTypeGroup ? productTypeGroup.lstProductType : []
      dispatch({
        type: GET_LIST_PRODUCT_TYPE,
        payload: {
          productTypes,
        },
      })
      if (productTypes && productTypes.length > 0) {
        dispatch(getLsProductByTypeId(productTypes[0].id))
      } else {
        dispatch({
          type: GET_LIST_PRODUCT,
          payload: {
            products: [],
          },
        })
      }
      resolve()
    })
  })
}

export function getDetailProductById(id) {
  return (dispatch) => {
    API.getDetailProductById(id).then((response) => {
      const product = response.body
      dispatch({
        type: VIEW_DETAIL,
        payload: {
          viewDetail: true,
        },
      })
      dispatch({
        type: GET_PRODUCT,
        payload: {
          product,
        },
      })
    })
  }
}

export function initProduct() {
  return (dispatch) => new Promise((resolve, reject) => {
    API.getAllProductTypeGroup().then((response) => {
      const productTypeGroups = response.body
      dispatch({
        type: GET_LIST_PRODUCT_TYPE_GROUP,
        payload: {
          productTypeGroups,
        },
      })
      if (productTypeGroups) {
        const prodTypeGrpId = isEmpty(sessionStorage.getItem('prodTypeGrpId')) ?
          productTypeGroups[0].id : sessionStorage.getItem('prodTypeGrpId')
        dispatch(getLsProductTypeByGroupId(prodTypeGrpId))
      }
      resolve()
    }).catch((error) => {
      dispatch({
        type: GET_LIST_PRODUCT_ERROR,
        loading: false,
        notificationError: { message: 'global.error' },
        error,
      })
      reject()
    })
  })
}

const ACTION_HANDLERS = {
  [GET_LIST_PRODUCT_TYPE_GROUP]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_PRODUCT_TYPE]: (state, action) => ({ ...state, ...action.payload }),
  [GET_LIST_PRODUCT]: (state, action) => ({ ...state, ...action.payload }),
  [GET_PRODUCT]: (state, action) => ({ ...state, ...action.payload }),
  [VIEW_DETAIL]: (state, action) => ({ ...state, ...action.payload }),

}

const initialState = {

}

export default function productsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
