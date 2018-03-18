import moment from 'moment'

export function toNumber(s) {
  if (typeof s === 'number') {
    return s
  }
  return parseInt(s, 10)
}

export function toDate(string) {
  return moment(string, 'DD-MM-YYYY').utc().isValid() ? moment(string, 'YYYY-MM-DDTHH:mm:ss.SSS').format('DD-MM-YYYY')
    : null
}

export function formatDate(date) {
  return moment(date, 'DD-MM-YYYY').utc().isValid() ? moment(date, 'DD-MM-YYYY').format('YYYY-MM-DDTHH:mm:ss.SSS')
    : null
}

export default toDate
