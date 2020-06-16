const defaultState = {
  name: "blank"
}
const profile = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        phone: action.payload.phone,
        email: action.payload.email,
      }
    case 'CLEAR_PROFILE':
      return defaultState
    default:
      return state
  }
}

export default profile