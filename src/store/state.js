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

    // =========== Users ===========
    users: [
      {
        userId: 1,
        userName: `User Name 1`,
        userAvatar: config.AVATAR_DEFAULT,
        // userName: faker.name.findName(),
        // userAvatar: faker.image.avatar(),
      },
      {
        userId: 2,
        userName: `User Name 2`,
        userAvatar: config.AVATAR_DEFAULT,
        // userName: faker.name.findName(),
        // userAvatar: faker.image.avatar(),
      },
      {
        userId: 3,
        userName: `User Name 3`,
        userAvatar: config.AVATAR_DEFAULT,
        // userName: faker.name.findName(),
        // userAvatar: faker.image.avatar(),
      },
      {
        userId: 4,
        userName: `User Name 4`,
        userAvatar: config.AVATAR_DEFAULT,
        // userName: faker.name.findName(),
        // userAvatar: faker.image.avatar(),
      },
    ],

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

    u: []

  },

  dispatch(action) {

    if (action.type === GET_ACTIVE_DIALOGS_TO_SIDEBAR) {
      let listOfDialogs = []
      this._state.dialogs.forEach(dialog => {
        listOfDialogs.push({
          userInfo: {
            userId: dialog.userId,
            userName: dialog.userName,
            userAvatar: dialog.userAvatar
          },
          lastMessage: dialog.getLastMessage({}),
          newMessage: dialog.newMessage
        })
        return
      })
      return listOfDialogs
    } else 

    if (action.type === GET_ACTIVE_DIALOG_ID) {
      this._state.users.forEach(user => {
        if (user.userId === action.id) {
          this._state.activeDialog.activeUser = user
          return
        }
      })
      this._state.dialogs.forEach(dialog => {
        if (dialog.userId === action.id) {
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