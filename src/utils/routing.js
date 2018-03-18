import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'

// ========================================================
// Browser History Setup
// ========================================================
export const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__,
})

export function navigateTo(path) {
  browserHistory.push(path)
  // browserHistory.push(`${path}`)
}

export function navigateByReplaceTo(path) {
  browserHistory.replace(path)
}

export function navigateBack() {
  browserHistory.goBack()
}
