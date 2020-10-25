import faker from 'faker'

import config from '../config'
import dbDialogs from './db-dialogs'

import profileReducer from './profileReducer'
import sidebarModalReducer from './sidebarModalReducer'
import dialogsReducer from './dialogsReducer'

const GET_ACTIVE_DIALOGS_TO_SIDEBAR = 'GET_ACTIVE_DIALOGS_TO_SIDEBAR'
const GET_ACTIVE_DIALOG_ID = 'GET_ACTIVE_DIALOG_ID'

let store = {
  getState() {
    return this._state
  },
  subscribe (observer) {
    this._callSibscriber = observer
  },
  _state: {
    // =========== Profile ===========
    profile: {
      id: 999,
      name: 'John Wick',
      avatar: config.AVATAR_PROFILE,
      status: 'Jardani Jovonovich',
    },

    // =========== Dialogs ===========
    dialogs: dbDialogs.dialogs,

    // =========== Sidebar Modal ===========
    sidebarModal: {
      title: '',
      display: ''
    },

    // =========== Active Dialog ===========
    activeDialog: {
      activeUser: '',
      activeMessages: [],
      unsentMessage: ''
    },

  },

  dispatch(action) {

    if (action.type === GET_ACTIVE_DIALOGS_TO_SIDEBAR) {
      let listOfDialogs = []
      this._state.dialogs.forEach(dialog => {
        listOfDialogs.push({
          userInfo: {
            userId: dialog.userInfo.userId,
            userName: dialog.userInfo.userName,
            userAvatar: dialog.userInfo.userAvatar
          },
          lastMessage: dialog.getLastMessage({}),
          newMessage: dialog.newMessage
        })
        return
      })
      return listOfDialogs
    } else 

    if (action.type === GET_ACTIVE_DIALOG_ID) {
      this._state.dialogs.forEach(dialog => {
        if (dialog.userInfo.userId === action.id) {
          this._state.activeDialog.activeUser = dialog.userInfo
          this._state.activeDialog.activeMessages = dialog.messages
          this._state.activeDialog.unsentMessage = dialog.newMessage
          return
        }
      })
    }

    this._state.dialogs = dialogsReducer(this._state.dialogs, action)
    this._state.sidebarModal = sidebarModalReducer(this._state.sidebarModal, action)
    this._state.profile = profileReducer(this._state.profile, action)

    this._callSibscriber()
  }
}

window.state = store._state

export const getActiveDialogsToSidebarAC = () => {
  return {
    type: GET_ACTIVE_DIALOGS_TO_SIDEBAR
  }
}
export const getActiveDialogIdAC = (id) => {
  return {
    type: GET_ACTIVE_DIALOG_ID,
    id,
  }
}

export default store