export const loadState = (stateName = 'redux') => {
  try {
    const serializedState = sessionStorage.getItem(stateName)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    // throw an err
    return undefined
  }
}

export const saveState = (state, stateName = 'redux') => {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem(stateName, serializedState)
  } catch (err) {
    // throw an err
  }
}
