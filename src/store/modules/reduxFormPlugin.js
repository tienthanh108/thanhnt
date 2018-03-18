import { touch } from 'redux-form'
import store from 'store/bootStore'

function markPrecedingFieldsTouched(state, action) {
  if (action.type === '@@redux-form/FOCUS' && state) {
    const allFields = Object.keys(state.registeredFields)
    const currentField = action.meta.field
    const currentFieldIndex = allFields.indexOf(currentField)
    setTimeout(() => store.dispatch(touch(action.meta.form, ...allFields.slice(0, currentFieldIndex))), 100)
  }
  return state
}

export default {
  generalForm: markPrecedingFieldsTouched,
  personalForm: markPrecedingFieldsTouched,
  employmentForm: markPrecedingFieldsTouched,
  otherForm: markPrecedingFieldsTouched,
}
