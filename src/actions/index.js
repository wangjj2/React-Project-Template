export const SetProfile = payload => ({
  type: 'SET_PROFILE',
  payload
})

export const SetData = (category, payload) => ({
  type: 'SET_DATA',
  category,
  payload
})

export const SetFilter = (payload) => ({
  type: "SET_FILTER",
  payload
})