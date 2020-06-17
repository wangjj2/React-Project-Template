export const SetProfile = payload => ({
  type: 'SET_PROFILE',
  payload
})

export const SetData = (category, payload) => ({
  type: 'SET_DATA',
  category,
  payload
})

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }