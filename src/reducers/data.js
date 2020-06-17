const defaultState = {
  history: [],
  education: [],
  projects: [],
  skills: [],
  interests: []
}
const data = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      console.log('in reducer', state, action)
      return {
        ...state,
        [action.category]: action.payload,
      }
    case 'CLEAR_DATA':
      return defaultState
    default:
      return state
  }
}
export default data