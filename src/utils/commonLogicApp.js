// import { toDate, formatDate } from 'utils/date'
import moment from 'moment'

export function getDefaultGender(gender) {
  if (!gender) {
    return 'Male'
  }
  return gender
}

export function getDefaultPhone(phone) {
  if (!phone) {
    phone = {
      countryCode: '+84',
    }
  }
  return phone
}

export function removeComma(data) {
  if (!data || typeof (data) !== 'string') { return data }
  return data.replace(/,/g, '')
}

/**
 * @author thanhnt43
 * ham xu ly format tien te
 * @param value
 * @param isComma
 */
export function formatStringToNumber(value, isComma = true) {
  if (typeof value === 'undefined' || value === null || value === '0') {
    return '0'
  }
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
  })
  return formatter.format(value).replace(/,/g, isComma ? ',' : '.')
}

export function monthToDay(month) {
  if (typeof month === 'undefined' || month === null) {
    return '0'
  }
  return month * 30
}

export function timeStampToDate(timeStamp, format = 'DD/MM/YYYY') {
  return moment(1318781876406).format(format)
}

/**
 * @author thanhnt43
 * stringToDate('17/9/2014','dd/MM/yyyy','/');
 * stringToDate('9/17/2014','mm/dd/yyyy','/')
 * stringToDate('9-17-2014','mm-dd-yyyy','-')
 * ham xu ly convert tu string sang date
 * @param _date
 * @param _format
 * @param _delimiter
 * @returns {Date}
 */
export function stringToDate(_date, _format, _delimiter) {
  if (typeof _date === 'undefined' || _date === null) {
    return null
  }
  const formatLowerCase = _format.toLowerCase()
  const formatItems = formatLowerCase.split(_delimiter)
  const dateItems = _date.split(_delimiter)
  const monthIndex = formatItems.indexOf('mm')
  const dayIndex = formatItems.indexOf('dd')
  const yearIndex = formatItems.indexOf('yyyy')
  let month = parseInt(dateItems[monthIndex], 10)
  month -= 1
  return new Date(dateItems[yearIndex], month, dateItems[dayIndex])
}

/**
 * fortmat date to string (dd-mm-yyyy)
 * @param date
 * @returns {string}
 */
export function dateToString(date, delimiter = '-', template = 'ddmmyyyy') {
  if (date === null) {
    return ''
  }
  let month = `${(date.getMonth() + 1)}`
  let day = `${date.getDate()}`
  const year = `${date.getFullYear()}`
  if (month.length < 2) {
    month = `0${month}`
  }
  if (day.length < 2) {
    day = `0${day}`
  }

  let result = ''
  switch (template) {
    case 'ddmmyyyy':
      result = `${day}${delimiter}${month}${delimiter}${year}`
      break
    case 'yyyymmdd':
      result = `${year}${delimiter}${month}${delimiter}${day}`
      break
    default:
      result = ''
  }
  return result
}

export function getDate(monthToAdd) {
  const today = new Date()
  const endDateMoment = moment(today)
  return endDateMoment.add(monthToAdd, 'months').format('DD/MM/YYYY')
}

export function isEmpty(val) {
  return (val === undefined || val == null || val.length <= 0)
}

export function getTotalDay(monthToAdd) {
  const today = new Date()
  const day1 = moment(today)
  const day11 = moment(today)
  const day12 = day1.add(monthToAdd, 'months')
  const day2 = moment(day12)
  return day2.diff(day11, 'days')
}

export function convertNumDayToYYYYMMDD(numDay) {
  // The string we're working with to create the representation
  let str = ''
  if (isEmpty(numDay)) {
    return str
  }
  // Map lengths of `diff` to different time periods
  const values = [[' Năm', 365], [' Tháng', 30], [' Ngày', 1]]
  // Iterate over the values...
  for (let i = 0; i < values.length; i += 1) {
    const amount = Math.floor(numDay / values[i][1])
    // ... and find the largest time value that fits into the diff
    if (amount >= 1) {
      // If we match, add to the string ('s' is for pluralization)
      str += `${amount}${values[i][0]} `

      // and subtract from the diff
      numDay -= amount * values[i][1]
    }
  }
  return str
}

export function getYearMonthDayFromTwoDates(fromDateStr, toDateStr) {
  const fromDate = moment(fromDateStr, 'DD/MM/YYYY')
  const toDate = moment(toDateStr, 'DD/MM/YYYY')
  const diffDate = toDate - fromDate
  const numYears = diffDate / 31536000000
  const numMonths = (diffDate % 31536000000) / 2628000000
  const numDays = ((diffDate % 31536000000) % 2628000000) / 86400000
  return { year: Math.floor(numYears), month: Math.floor(numMonths), day: Math.floor(numDays) }
}

export function subHideMobile(value) {
  if (value && value.length > 4) {
    return `+84${value.substring(0, value.length - 4)}xxxx`
  }
  return value || ''
}

/**
 * ham xoa dau
 * @param str
 * @returns {string|*}
 */
export function bodauTiengViet(str) {
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  return str
}

export function lamtronlen(number) {
  // 34446.3434 = 345000
  const round = Math.round(number / 1000)
  let round2 = round
  if (round < number / 1000) {
    round2 = round + 1
  }
  return round2 * 1000
}

export function nullToBlank(value) {
  return isEmpty(value) ? '' : value
}

export function checkLogin() {
  return !!sessionStorage.getItem('token')
}

export function subZezoPhone(value) {
  if (isEmpty(value)) {
    return ''
  }
  return value.trim().replace(/^0+/, '')
}
