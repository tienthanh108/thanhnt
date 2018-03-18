import moment from 'moment'
import store from '../store/bootStore'
import { isEmpty, removeComma } from './commonLogicApp'


export function nomalizePassport(current, previous) {
  if (/^[a-z0-9]*$/i.test(current)) return current.toUpperCase()
  return previous
}

export function parseBool(v) {
  return v === 'true'
}

export function addError(error, key, value) {
  if (value) {
    if (!error) {
      error = {}
    }
    error[key] = value
  }

  return error
}

export function validateDate(date, errorMessage, errDateOfFuture = '',
  checkFuture = true, errDateofPast = '', checkPast = false, errorNull = null,
  startDate = null, endDate = null, errRange = '') {
  let error

  if (isEmpty(date) || !date || date === '-undefined-undefined') {
    error = errorNull
  } else {
    const dd = date.split('-')[0]
    const mm = date.split('-')[1]
    const yyyy = date.split('-')[2]
    if (!dd || !mm || !yyyy ||
      !moment(date, 'DD-MM-YYYY', true).isValid()) {
      error = errorMessage
    }
  }

  if (!error && checkFuture && moment() < moment(date, 'DD-MM-YYYY')) {
    error = errDateOfFuture
  }
  if (!error && checkPast && moment() > moment(date, 'DD-MM-YYYY').add(1, 'days')) {
    error = errDateofPast
  }
  if (!error && startDate && endDate &&
    (moment(startDate, 'DD/MM/YYYY') > moment(date, 'DD-MM-YYYY') ||
    moment(endDate, 'DD/MM/YYYY') < moment(date, 'DD-MM-YYYY'))) {
    error = errRange
  }

  return error
}

export function validatePhone(phone, errorMessage = 'error', withExt = false) {
  let errors
  const pattext = /^(?!0)[0-9]*$/i
  const patt = /^[0-9]*$/i
  if (!phone) {
    errors = {
      countryCode: errorMessage,
      phoneNumber: errorMessage,
    }
    if (withExt) {
      errors.ext = errorMessage
    }
    return errors
  }

  if (!phone.phoneNumber || patt.test(phone.phoneNumber) === false) {
    errors = addError(errors, 'phoneNumber', errorMessage)
  }

  if (withExt) {
    if (phone && phone.ext && pattext.test(phone.ext) === false) {
      errors = addError(errors, 'ext', errorMessage)
    }
  }
  return errors
}

export function validatePhone2(phone, errorMessage = 'error', withExt = false) {
  let errors
  const pattext = /^(?!0)[0-9]*$/i
  const patt = /^[0-9]*$/i
  if (!phone) {
    errors = errorMessage
    if (withExt) {
      errors.ext = errorMessage
    }
    return errors
  }

  if (!phone || patt.test(phone) === false) {
    errors = errorMessage
  }

  if (withExt) {
    if (phone && phone.ext && pattext.test(phone.ext) === false) {
      errors = addError(errors, 'ext', errorMessage)
    }
  }
  return errors
}

export function validateAddress(address, errProvince, errDistrict, errStreet, errAddress) {
  let errors

  if (!address) {
    errors = {
      province: { id: errProvince },
      district: { id: errDistrict },
      addressDetails: errAddress,
      street: errStreet,
    }
  } else {
    if (!address.province || !address.province.id) {
      errors = addError(errors, 'province', { id: errProvince })
    }
    if (!address.district || !address.district.id) {
      errors = addError(errors, 'district', { id: errDistrict })
    }
    if (!address.addressDetails) {
      errors = addError(errors, 'addressDetails', errAddress)
    }
    if (!address.street) {
      errors = addError(errors, 'street', errStreet)
    }
  }

  return errors
}

export function validateString(value, errorMessage = 'error', alphaNumericOnly = false,
  specialCharacterNumer = false, customRegex = undefined) {
  let errors
  let reg = /[0-9@!#$^%&*()+=\\\-[\]';,./{}|"":<>?]/g
  if (customRegex) {
    reg = customRegex
  }
  if (!value) {
    errors = errorMessage
  } else if (alphaNumericOnly && !/^[a-z0-9]+$/i.test(value)) {
    errors = errorMessage
  } else if (specialCharacterNumer && (reg.test(value) || value.trim().length === 0)) {
    errors = errorMessage
  }

  return errors
}

export function validateEmail(email, errEmpty, errInvalid) {
  let errors
  if (!email) {
    errors = errEmpty
  } else if (!/^[a-zA-Z0-9!#$%&’*+/=?^_{|}~-]+(?:\.[a-zA-Z0-9!#$%&’*+/=?^_{|}~-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/i.test(email)) { // eslint-disable-line
    errors = errInvalid
  }

  return errors
}

export function validateSelectionList(option, errorMessage = 'error') {
  let errors

  if (!option || !option.id) {
    errors = {
      id: errorMessage,
    }
  }

  return errors
}

export function validateSelectionList2(option, errorMessage = 'error') {
  let errors
  if (!option) errors = errorMessage
  return errors
}

export function validateNumber(value, errorMessage = 'error', errorPhoneNotZero = 'error',
  allowZero = true, required = false) {
  let errors
  if (!value && value !== 0) {
    if (required) {
      errors = errorMessage
    }
  } else {
    value = removeComma(value)
    if (isNaN(value)) {
      errors = errorMessage
    }
    if (!allowZero && value === 0) {
      errors = errorPhoneNotZero
    }
  }
  return errors
}

export function validateRequired(value, errorMessage = 'error') {
  let errors

  if (value === null || value === undefined || value === '') {
    errors = errorMessage
  }
  return errors
}

export function validateRegex(value, regex, emptyMessage = 'error', errorMessage = 'error', isRequired = false) {
  let errors

  if (!value) {
    if (isRequired) {
      errors = emptyMessage
    }
  } else if (!regex.test(value)) {
    errors = errorMessage
  }
  return errors
}

export function validateRegister(values) {
  const errors = {}
  addError(errors, 'email', validateEmail($.trim(values.email),
  'notification.email.empty', 'notification.email.invalid'))
  return errors
}

// KhuongDV
/**
 * Simple phone number validation method (just for testing a simple string)
 * @param phone
 * @param errorMessage
 * @returns {*}
 */
// const validatePhoneSimple = (phone, errorMessage = 'error') => {
//   const patt = /^[0-9]{10,11}$/
//   if (!phone) {
//     return null
//   }
//
//   if (patt.test(phone) === false) {
//     return errorMessage
//   }
//   return ''
// }


/**
 * In Dream Detail Screen, this method is used for validating user input
 * @author KhuongDV
 * @param values
 * @returns {{}}
 */
export const validateDreamDetail = (values) => {
  const errors = {}

  addError(errors, 'email', validateEmail(values.email, 'notification.email.empty', 'notification.email.invalid'))
  addError(errors, 'fullName', validateString(values.fullName, 'notification.fullname',
    false, true, /[0-9@!#$^%&*()+=\\\-_[\]';,./{}|"":<>?]/g))
  addError(errors, 'dreamCode', validateString(values.dreamCode, 'dreamdetail.yourdream.emptymsg'))
  addError(errors, 'mobile', validatePhone(values.mobile, 'dreamdetail.mobilenumber.invalid'))
  return errors
}

export const validateStepOne = (values) => {
  const errors = {}

  if (+values.timeDuration <= 0) {
    addError(errors, 'timeDuration', 'dream.validation.timeDuration')
  }
  if (+values.budget <= 0) {
    addError(errors, 'budget', 'dream.validation.budget_invalid')
  }

  if (+values.monthlySaving <= 0) {
    addError(errors, 'monthlySaving', 'dream.validation.saving_invalid')
  }

  addError(errors, 'name', validateString(values.name, 'dream.validation.name_not_empty',
    false, true, /[@!#$^%&*()+=\\\-_[\]';,./{}|"":<>?]/g))
  addError(errors, 'budget', validateNumber(values.budget,
    'dream.validation.budget_not_empty', 'error', false, true))
  addError(errors, 'timeDuration', validateNumber(values.timeDuration,
    'dream.validation.time_not_empty', 'error', false, true))
  addError(errors, 'monthlyIncome', validateNumber(values.monthlyIncome,
    'dream.validation.income_not_empty', 'error', false, true))
  addError(errors, 'monthlySaving', validateNumber(values.monthlySaving,
    'dream.validation.saving_not_empty', 'error', false, true))
  return errors
}

export const validateCreateAccount = (values) => {
  const errors = {}
  // value, regex, emptyMessage = 'error', errorMessage = 'error', isRequired = false
  // addError(errors, 'gender', validateNumber($.trim(values.gender),
  //   'create.account.validate.gender.not_empty', 'error', false, true))
  // addError(errors, 'fullName', validateString($.trim(values.fullName), 'notification.fullname',
  //   false, true, /[0-9@!#$^%&*()+=\\\-_[\]';,./{}|"":<>?]/g))
  // addError(errors, 'username', validateString($.trim(values.username), 'notification.create.account.username',
  //   true, false))
  addError(errors, 'password', validateRegex($.trim(values.password), /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}/g,
    'create.account.validate.password.invalid', 'create.account.validate.password.invalid', true))
  addError(errors, 'passConfirm', validateRegex($.trim(values.passConfirm), /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}/g,
    'create.account.validate.password.invalid', 'create.account.validate.password.invalid', true))
  if (values.password && values.passConfirm && values.password !== values.passConfirm) {
    errors.passConfirm = 'create.account.password.passConfirm.invalid'
  }
  addError(errors, 'email', validateEmail($.trim(values.email),
    'notification.email.empty', 'notification.email.invalid'))
  addError(errors, 'mobile', validatePhone(values.mobile, 'notification.phone'))

  if (values.pid) {
    const nationalIdlength = values.pid.length
    if (nationalIdlength !== 9 && nationalIdlength !== 12) {
      errors.pid = 'notification.nationalIdNew'
    }
  } else {
    errors.pid = 'notification.nationalId'
  }
  if (!values.typeOfID) {
    addError(errors, 'passport', validateString(values.passport, 'notification.passport'))
  }

  if (!values.dob) {
    addError(errors, 'dob', 'dream.validation.dob')
  }

  addError(errors, 'dob', validateDate(values.dob, 'notification.dob', 'notification.dateOfFuture', true, null, false))

  return errors
}

export const validateLogin = (values) => {
  const errors = {}
  // addError(errors, 'username', validateString($.trim(values.username), 'notification.create.account.username',
  //   true, false))
  const regexUsername = '^([a-zA-Z0-9!#$%&’*+/=?^_{|}~-]+(?:\\.[a-zA-Z0-9!#$%&’*+/=?^_{|}~-]+)*@[a-zA-Z0-9-]'
    + '+(?:\\.[a-zA-Z0-9-]+)+|[0-9]{10,11})$'
  if (!values.username || !new RegExp(regexUsername, 'i').test(values.username)) {
    addError(errors, 'username', 'notification.create.account.username')
  }
  addError(errors, 'password', validateRegex($.trim(values.password), /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}/g,
    'create.account.validate.password.invalid', 'create.account.validate.password.invalid', true))
  return errors
}

export const validateOTP = (values) => {
  const error = {}
  if (!values.pin1 || !values.pin2 || !values.pin3 || !values.pin4 || !values.pin5 || !values.pin6) {
    error.pin1 = 'notification.otp'
  }
  return error
}

export const validateSavingBasic = (values) => {
  const errors = {}
  addError(errors, 'scheduleTransferDate', validateDate(values.scheduleTransferDate,
    'notification.dateOfTranfer', null, false, 'notification.dateOfPast', true,
    'dream.validation.scheduleTransferDateEmpty', values.effectiveDate, values.maturityDate,
    'dream.validation.dateRange'))
  addError(errors, 'principalAmount', validateNumber(values.principalAmount,
    'dream.validation.principalAmount_invalid', 'dream.validation.principalAmount_blank', false, true))
  if (!errors.principalAmount && removeComma(values.principalAmount) < 100000) {
    errors.principalAmount = 'dream.validation.principalAmount_min'
  }
  if (!values.agree) {
    errors.agree = 'notification.agree'
  }
  return errors
}

export const validateSuperBasic = (values) => {
  const errors = {}
  addError(errors, 'fullName', validateString(values.fullName, 'dream.validation.fullName',
    false, true))
  addError(errors, 'marriageStatus', validateNumber(values.marriageStatus,
    'dream.validation.marriageStatus', 'error', true, true))
  addError(errors, 'pidIssuedDate', validateDate(values.pidIssuedDate, 'dream.validation.IdIssueDate',
  'dream.validation.dateOfFuture', true, null, false))
  addError(errors, 'pidIssuedPlace', validateString(values.pidIssuedPlace, 'dream.validation.IdIssuePlace',
    true, false, null))
  if (values.typeGreenCard && values.typeGreenCard === 'yes') {
    addError(errors, 'tinNumber', validateRegex(values.tinNumber, /^\d{3}-\d{2}-\d{4}$/,
      'notification.tinNumber.empty', 'notification.tinNumber.error', true))
  }


  if (values.isTinNumber === 'yes') {
    addError(errors, 'tinNumber', validateRegex(values.tinNumber, /^\d{3}-\d{2}-\d{4}$/,
      'notification.tinNumber.empty', 'notification.tinNumber.error', true))
  }

  if (isEmpty(values.pidIssuedDate)) {
    addError(errors, 'pidIssuedDate', 'dream.validation.pidIssuedDateRequired')
  } else {
    const doIssue = moment(values.pidIssuedDate, 'DD-MM-YYYY')
    const currentYear = moment()
    const diffYears = currentYear.diff(doIssue, 'years', true)
    if (diffYears > 15) {
      errors.pidIssuedDate = 'notification.dateOfIssueExpNationalID'
    }
  }

  const isPassPort = (store.getState().registerSuper && store.getState().registerSuper.application)
    ? store.getState().registerSuper.application.isPassPort : false

  if (!isPassPort) {
    if (!values.pidIssuedDate) {
      addError(errors, 'pidIssuedDate', 'dream.validation.pidIssuedDateRequired')
    }
  } else {
    if (!values.passportIssuedDate) {
      addError(errors, 'passportIssuedDate', 'dream.validation.passportIssuedDate')
    }

    if (!values.passportIssuedPlace) {
      addError(errors, 'passportIssuedPlace', 'dream.validation.passportIssuedPlace')
    }
  }

  return errors
}

export const validateSuperResident = (values) => {
  const errors = {}
  addError(errors, 'residentalCityCode',
    validateSelectionList2(values.residentalCityCode, 'dream.validation.permanentAddressProvince'))
  addError(errors, 'residentialDistrictCode',
    validateSelectionList2(values.residentialDistrictCode, 'dream.validation.permanentAddressDistrict'))
  addError(errors, 'residentialWard', validateString(values.residentialWard,
    'dream.validation.wardCommune'))
  addError(errors, 'residentialAddress', validateString(values.residentialAddress,
    'dream.validation.addressDetails'))
  if (!values.currentIsPermanent) {
    addError(errors, 'currentCityCode',
      validateSelectionList2(values.currentCityCode, 'dream.validation.currentAddressProvince'))
    addError(errors, 'currentAddress', validateString(values.currentAddress,
      'dream.validation.currentAddressDetails'))
  }
  addError(errors, 'residentalDuration',
    validateSelectionList2(values.residentalDuration, 'dream.validation.yearsOfLiving'))
  if (!values.currentDuration) {
    addError(errors, 'currentDuration', 'dream.validation.currentDuration')
  }
  return errors
}

export const validateSuperEmployment = (values) => {
  const errors = {}
  addError(errors, 'eduDegreeCode', validateSelectionList2(values.eduDegreeCode, 'dream.validation.educationId'))
  // addError(errors, 'eduDegreeExtra', validateString(values.eduDegreeExtra, 'dream.validation.educationDetails'))
  addError(errors, 'positionCode', validateSelectionList2(values.positionCode,
    'dream.validation.employmentLevel'))
  // addError(errors, 'positionExtra', validateString(values.positionExtra, 'dream.validation.employmentLevelDetails'))
  addError(errors, 'jobCode', validateSelectionList2(values.jobCode, 'dream.validation.employmentIndustry'))
  return errors
}


export const validateSuperOther = (values) => {
  const errors = {}
  addError(errors, 'nameInCard', validateString(values.nameInCard, 'dream.validation.nameInCard',
    false, true, /[@!#$^%&*()+=\\\-_[\]';,./{}|"":<>?]/g))
  addError(errors, 'cardActivationType', validateSelectionList2(values.cardActivationType,
    'dream.validation.cardActivationType'))
  if (values.cardActivationType === 'SC') {
    if (!values.cardActivationCode || values.cardActivationCode.length < 4) {
      errors.cardActivationCode = 'dream.validation.cardActivationCode2'
    }
  } else {
    addError(errors, 'cardActivationCode', validateString(values.cardActivationCode,
      'dream.validation.cardActivationCode', false, true))
  }
  if (values.isRegisterVpbankPlus) {
    addError(errors, 'vpbankPlusMobileNumber',
    validatePhone2(values.vpbankPlusMobileNumber, 'dreamdetail.mobilenumber.invalid'))
  }
  addError(errors, 'ocbUsername', validateEmail(values.ocbUsername,
    'notification.email.empty', 'notification.email.invalid'))
  if (!values.condition) {
    errors.condition = 'notification.agree'
  }
  return errors
}

export const validateAddSavingBook = (values) => {
  const errors = {}
  if (sessionStorage.getItem('vpbank') === 'false') {
    addError(errors, 'bankCode', validateSelectionList2(values.bankCode,
      'dream.validation.bank'))
    addError(errors, 'savingBookNumber', validateString(values.savingBookNumber, 'dream.validation.savingBookNumber',
      false, true, /[@!#$^%&*()+=\\\-_[\]';,./{}|"":<>?]/g))
    addError(errors, 'savingAmount', validateNumber(values.savingAmount,
        'dream.validation.saving_amount', 'error', false, true))
    addError(errors, 'savingCurrency', validateString(values.savingCurrency, 'dream.validation.savingCurrency',
        false, true, /[@!#$^%&*()+=\\\-_[\]';,./{}|"":<>?]/g))
    addError(errors, 'interestRate', validateNumber(values.interestRate,
          'dream.validation.rate', 'error', false, true))
    addError(errors, 'openingDate', validateDate(values.openingDate, 'dream.validation.openIssueDate',
          'dream.validation.dateOfFuture', true, null, false, 'dream.validation.openIssueDateEmpty'))
    addError(errors, 'closedDate', validateDate(values.closedDate, 'dream.validation.closeIssueDate',
          null, false, 'dream.validation.dateOfPast', true, 'dream.validation.closeIssueDateEmpty'))
    if (!/(^[1-9]\d{0,2})(\.\d?[0-9])?$/.test(values.interestRate)) {
      addError(errors, 'interestRate', 'dream.validation.interestRate')
    }
  } else {
    const arr = Object.keys(values).filter((element) => element.startsWith('aaa'))
    if (arr.length < 1) {
      errors.checkValue = 'dream.validation.checkValue'
    }
  }
  return errors
}

export const validateAddMoney = (values) => {
  const errors = {}
  addError(errors, 'transferAmount', validateNumber(values.transferAmount,
    'dream.validation.saving_amount', 'error', false, true))
  if (values.note) {
    addError(errors, 'note', validateString(values.note, 'addMoney.conten.note.validate.error',
      false, true, /[@!#$^%&*()+=\\\-_[\]';,./{}|"":<>?]/g))
  }
  return errors
}

export const validateChangePassword = (values) => {
  const errors = {}
  addError(errors, 'newPassword', validateRegex($.trim(values.newPassword), /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}/g,
    'create.account.validate.password.invalid', 'create.account.validate.password.invalid', true))
  addError(errors, 'passConfirm', validateRegex($.trim(values.passConfirm), /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}/g,
    'create.account.validate.password.invalid', 'create.account.validate.password.invalid', true))
  if (values.password === values.newPassword) {
    errors.newPassword = 'create.account.password.newPassword.invalid'
  }
  if (values.newPassword && values.passConfirm && values.newPassword !== values.passConfirm) {
    errors.passConfirm = 'create.account.password.passConfirm.invalid'
  }
  return errors
}

export const validateUpdateSchedule = (values) => {
  const errors = {}
  addError(errors, 'scheduleDate', validateDate(values.scheduleDate, 'update.shedule.validation.scheduleDate',
    null, false, 'notification.dateOfPast', true, 'update.shedule.validation.scheduleDateEmpty'))
  addError(errors, 'transferAmount', validateNumber(values.transferAmount,
    'dream.validation.saving_not_empty', 'error', false, true))
  addError(errors, 'regularPayment', validateSelectionList2(values.regularPayment,
    'update.shedule.basic.period.not.empty'))
  return errors
}
export const validateAccountInfo = (values) => {
  const errors = {}
  if (values.residentalCityCode) {
    addError(errors, 'residentialDistrictCode',
      validateSelectionList2(values.residentialDistrictCode, 'dream.validation.permanentAddressDistrict'))
    addError(errors, 'residentialWard', validateString(values.residentialWard,
      'dream.validation.wardCommune'))
    addError(errors, 'residentialAddress', validateString(values.residentialAddress,
      'dream.validation.addressDetails'))
  }
  if (values.currentCityCode) {
    addError(errors, 'currentAddress', validateString(values.currentAddress,
      'dream.validation.currentAddressDetails'))
    if (!values.currentDuration) {
      addError(errors, 'currentDuration', 'dream.validation.currentDuration')
    }
  }
  return errors
}

export const createDreamSavingBook = () => {
  const errors = {}
  return errors
}
