import moment from 'moment'
import branches from 'utils/vpbbranches'
import { formatStringToNumber } from './commonLogicApp'

export const GA_TRACKING_ID = 'UA-98199048-1' // Google Analytics Tracking ID
// const DEPLOYED_IP = '10.37.16.23'
export const FACEBOOK_SHARING_URL = 'https://www.facebook.com/sharer/'
  + 'sharer.php?u=https%3A%2F%2Fdream.vpbank.com.vn%2F%3Fsource%3Dfacebook'
export const GOOGLE_PLUS_SHARING_URL = 'https://plus.google.com/share?url='
  + 'https%3A%2F%2Fdream.vpbank.com.vn%2F%3Fsource%3Dgoogle'
export const DATE_FORMAT = 'YYYY-MM-DD'
export const DATE_FORMAT_HM = 'HH-mm'
export const DATE_FORMAT_DD_MM_YY = 'DD/MM/YY'
export const DD_MM_YYYY_HH_MM = 'DD/MM/YYYY HH:mm'
export const DD_MMM_YYYY_HH_MM = 'DD MMM YYYY HH:mm'
export const ISO_DATE_TIME_WITHOUT_TIMEZONE = 'YYYY-MM-DD[T]HH:mm:ss'

// max size: 5Mb 5*10240*1024
export const UPLOAD_FILE_SIZE_MAXIMUM = 5242880


export const NOTIFICATION_ERROR = 'NOTIFICATION_ERROR'
export const NOTIFICATION_SUCCESS = 'NOTIFICATION_SUCCESS'
export const NOTIFICATION_INFO = 'NOTIFICATION_INFO'
export const NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR'
export const NOTIFICATION_CLEAR_ERROR = 'NOTIFICATION_CLEAR_ERROR'
export const NOTIFICATION_CLEAR_INFO = 'NOTIFICATION_CLEAR_INFO'
export const NOTIFICATION_CLEAR_SUCCESS = 'NOTIFICATION_CLEAR_SUCCESS'

function compare(a, b) {
  return a.value >= b.value ? 1 : -1
}
function compareByName(a, b) {
  return a.label >= b.label ? 1 : -1
}

export function getOptions(selections, category, locale = 'vi') {
  return selections
    .filter(
      (item) => item.category === category)
    .map(
      (item) => ({
        value: item.id,
        label: item.values[locale],
      })).sort(compareByName)
}

export function transformGeographic(list) {
  if (list) {
    return list.map((item) => ({ value: item.code, label: item.name })).sort(compareByName)
  }
  return []
}

export function transformPhoneCodes() {
  return [{ value: '+84', label: '+84' }]
  // return countries.map((item) => ({ value: item.code, label: item.code })) // return list phone code
}

export function getCompanies(companies, locale = 'vi') {
  const lbOther = locale === 'vi' ? 'Khác' : 'Others'
  return companies.map((item) => ({
    value: item.id,
    label: (item.id === 1) ? lbOther : item.name }))
}

export function transformProvinces(provinces) {
  return provinces.map(
    (item) => ({
      value: item.id,
      label: item.name,
      DISTRICTS: item.districts.map((district) => ({
        value: district.id,
        label: district.name })).sort(compare),
    })).sort(compare)
}

export function getDistricts(provinces, province) {
  let districts = []
  if (province) {
    const filteredProvinces = provinces.filter((p) => p.value === province.id)
    if (filteredProvinces.length) {
      districts = filteredProvinces[0].DISTRICTS
    }
  }
  return districts
}

export const BRANCH_CITY = branches.map((branch) => ({
  value: branch.id,
  label: branch.name,
  city: branch.province.id,
  address: `${branch.addressDetail} ${branch.district.name}, ${branch.province.name}`,
}))

export function fillOptions(count, min = 1, suffix = '') {
  const arr = Array(...Array(count))
  return arr.map((x, i) => ({ value: i + min, label: `${i + min}${suffix !== '' ? `${suffix}` : ''}` }))
}

export function sortFirstById(selections, category, locale, id) {
  let parents = selections
  if (category && locale) {
    parents = getOptions(selections, category, locale)
  }
  if (parents && parents.length > 0) {
    for (let i = 0; i < parents.length; i += 1) {
      const item = parents[i]
      if (item.value === id) {
        parents.splice(i)
        parents.unshift(item)
        break
      }
    }
  }
  return parents
}

export function getTitlesCategories(type, categories, locale) {
  if (categories) {
    return categories
      .filter(
        (item) => item.type === type)
      .map(
        (item) => ({
          value: item.code,
          label: item.expressions[locale === 'VN' ? 0 : 1].expression,
        })).sort(compareByName)
  }
  return []
}

function addOtherTitle(item, locale) {
  if (item.code === 'JCB_OTHER') {
    return 'CBNV khác'
  } else if (item.code === 'JTD_OTHER') {
    return 'Tự doanh khác'
  }
  return item.expressions[locale === 'VN' ? 0 : 1].expression
}

export function getTitlesCategories2(type, categories, locale) {
  if (categories) {
    return categories
      .filter(
        (item) => item.type === type)
      .map(
        (item) => ({
          value: item.code,
          label: addOtherTitle(item, locale),
        })).sort(compareByName)
  }
  return []
}

export function getTitles(locale) {
  const titles = [
    {
      value: '0',
      labels: {
        vi: 'Cô/Chị',
        en: 'Ms',
      },
    },
    {
      value: '1',
      labels: {
        vi: 'Bà',
        en: 'Mrs',
      },
    },
    {
      value: '2',
      labels: {
        vi: 'Ông',
        en: 'Mr',
      },
    },
  ]
  return titles.map((item) => ({ value: item.value, label: item.labels[locale] }))
}

export function getListDreams() {
  const listDreams = [
    {
      id: '1',
      icon: 'docongnghe',
      type: 'TECHNOLOGY',
      name: {
        vi: 'Đồ công nghệ',
        en: 'Technology',
      },
    },
    {
      id: '2',
      icon: 'muaoto',
      type: 'CAR',
      name: {
        vi: 'Mua ô tô',
        en: 'Buy Car',
      },
    },
    {
      id: '3',
      icon: 'muanha',
      type: 'HOUSE',
      name: {
        vi: 'Mua nhà',
        en: 'Buy House',
      },
    },
    {
      id: '4',
      icon: 'damcuoi',
      type: 'WEDDING',
      name: {
        vi: 'Đám cưới',
        en: 'Buy House',
      },
    },
    {
      id: '5',
      icon: 'dulich',
      type: 'TRAVEL',
      name: {
        vi: 'Du lịch',
        en: 'Travel',
      },
    },
    {
      id: '6',
      icon: 'hocvan',
      type: 'EDUCATION',
      name: {
        vi: 'Học vấn',
        en: 'Education',
      },
    },
    {
      id: '7',
      icon: 'khoinghiep',
      type: 'STARTUP',
      name: {
        vi: 'Khởi nghiệp',
        en: 'Start Up',
      },
    },
    {
      id: '8',
      icon: 'khac',
      type: 'OTHER',
      name: {
        vi: 'Khác',
        en: 'Other',
      },
    },
  ]
  return listDreams
}
export function getUnitTimeList(locale = 'vi') {
  const unitTimeList = [
    {
      value: '1',
      labels: {
        vi: 'Tháng',
        en: 'Month',
      },
    },
    {
      value: '2',
      labels: {
        vi: 'Năm',
        en: 'Year',
      },
    },
  ]
  return unitTimeList.map((item) => ({ value: item.value, label: item.labels[locale] }))
}

export function getScheduleList(locale = 'vi') {
  const unitTimeList = [
    {
      value: 'MONTHLY',
      labels: {
        vi: 'Hàng Tháng',
        en: 'Monthly',
      },
    },
    {
      value: 'WEEKLY',
      labels: {
        vi: 'Hàng tuần',
        en: 'Weekly',
      },
    },
    {
      value: 'DAILY',
      labels: {
        vi: 'Hàng ngày',
        en: 'Daily',
      },
    },
  ]
  return unitTimeList.map((item) => ({ value: item.value, label: item.labels[locale] }))
}

export function getMaritalStatus(locale = 'vi') {
  const maritalStatus = [
    {
      value: '3',
      labels: {
        vi: 'Độc thân',
        en: 'Single',
      },
    },
    {
      value: '1',
      labels: {
        vi: 'Đã kết hôn',
        en: 'Married',
      },
    },
    {
      value: '2',
      labels: {
        vi: 'Ly hôn',
        en: 'Divorced',
      },
    },
  ]
  return maritalStatus.map((item) => ({ value: item.value, label: item.labels[locale] }))
}

export function getMethodActiveCards(locale = 'vi') {
  const methods = [
    {
      value: 'SQM',
      labels: {
        vi: 'Họ tên mẹ chủ thẻ',
        en: 'What is your mother`s name',
      },
    },
    {
      value: 'SQS',
      labels: {
        vi: 'Tên trường tiểu học của chủ thẻ',
        en: 'What is your primary school`s name',
      },
    },
    {
      value: 'SC',
      labels: {
        vi: 'Mã bảo mật',
        en: 'Security code',
      },
    },
  ]
  return methods.map((item) => ({ value: item.value, label: item.labels[locale] }))
}

export function getIncomeList(listItem) {
  if (typeof listItem === 'undefined' || listItem === null || listItem.length === 0) {
    return []
  }
  return listItem.map((item, i) => {
    let label = `${formatStringToNumber(item.min)}${' - '}${formatStringToNumber(item.max)}`
    if (i === listItem.length - 1) {
      label = `>= ${formatStringToNumber(item.min)}`
    }
    return {
      value: item.id,
      label,
    }
  })
}

export const YEARS = fillOptions(moment().format('YYYY') - 1904, 1905).reverse()

export const MONTHS = fillOptions(12)

export const DAYS = fillOptions(31)

export function getTitleSecurityType(type) {
  let title = ''
  switch (type) {
    case 'SQM': // SC, SQM, SQS
      title = 'Họ và tên mẹ chủ thẻ'
      break
    case 'SQS':
      title = 'Tên trường tiểu học chủ thẻ'
      break
    case 'SC':
      title = 'Mã bảo mật'
      break
    default:
      title = ''
  }
  return title
}

export function getTitleJobType(jobType) {
  let title = ''
  switch (jobType) {
    case 'JTD':
      title = 'Tự doanh'
      break
    case 'JCB':
      title = 'CBNV Cty'
      break
    case 'JOT':
      title = 'Khác'
      break
    case 'JCM':
      title = 'Chuyên môn'
      break
    default:
      title = ''
  }
  return title
}
