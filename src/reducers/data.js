const noFilter = a => a;
const defaultState = {
  history: [],
  education: [],
  projects: [],
  skills: [],
  interests: [],
  filter: noFilter
}
const data = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        [action.category]: action.payload,
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    case 'CLEAR_FILTER':
      return {
        ...state,
        filter: noFilter
      }
    case 'CLEAR_DATA':
      return defaultState
    default:
      return state
  }
}
export default data