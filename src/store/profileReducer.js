const SAVE_PROFILE_NAME = 'SAVE_PROFILE_NAME'
const SAVE_PROFILE_STATUS = 'SAVE_PROFILE_STATUS'

export const saveProfileNameAC = (name) => {
  return {
    type: SAVE_PROFILE_NAME,
    name,
  }
}
export const saveProfileStatusAC = (status) => {
  return {
    type: SAVE_PROFILE_STATUS,
    status,
  }
}

export default function profileReducer (state, action) {

  switch (action.type) {
    case SAVE_PROFILE_NAME:
      state.name = action.name
      return state
    case SAVE_PROFILE_STATUS:
      state.status = action.status
      return state
    default:
      return state
  }
}