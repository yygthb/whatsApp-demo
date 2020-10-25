const OPEN_SIDEBAR_MODAL = 'OPEN_SIDEBAR_MODAL'
const CLOSE_SIDEBAR_MODAL = 'CLOSE_SIDEBAR_MODAL'

export const openSidebarModalAC = (title) => {
  return {
    type: OPEN_SIDEBAR_MODAL,
    title,
  }
}
export const closeSidebarModalAC = (title) => {
  return {
    type: CLOSE_SIDEBAR_MODAL,
    title,
  }
}

export default function sidebarModalReducer (state, action) {

  switch (action.type) {
    case OPEN_SIDEBAR_MODAL:
      state = {
        title: action.title,
        display: true,
      }
      return state
    case CLOSE_SIDEBAR_MODAL:
      state = {
        title: action.title,
        display: false,
      }
      return state
    default:
      return state
  }

}