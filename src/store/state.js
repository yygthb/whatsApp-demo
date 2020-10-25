import faker from 'faker'

import config from '../config'
import dbDialogs from './db-dialogs'

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
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
      // {
      //   userId: 4,
      //   // userName: `User Name 4`,
      //   // userAvatar: config.AVATAR_DEFAULT,
      //   userName: faker.name.findName(),
      //   userAvatar: faker.image.avatar(),
      // },
    ],

    // =========== Dialogs ===========
    dialogs: dbDialogs.dialogs,

    // =========== Sidebar Modal ===========
    sidebarModal: {
      title: 'Profile',
      display: ''
    },

    // =========== Active Dialog ===========
    activeDialog: {
      activeUser: '',
      activeMessages: [],
      unsentMessage: ''
    }

  },

  dispatch(action) {
    if (action.type === 'TEST') {
      console.log('test')
    } else

    if (action.type === 'GET_ACTIVE_DIALOGS_TO_SIDEBAR') {
      let listOfDialogs = []
      this._state.dialogs.forEach(dialog => {
        this._state.users.forEach(user => {
          if (dialog.userId === user.userId) {
            listOfDialogs.push({
              userInfo: {
                userId: user.userId,
                userName: user.userName,
                userAvatar: user.userAvatar
              },
              lastMessage: dialog.getLastMessage({}),
              newMessage: dialog.newMessage
            })
          }
        })
      })
      return listOfDialogs
    } else 

    if (action.type === 'SEND_NEW_MESSAGE') {
      this._state.dialogs.forEach(dialog => {
        if (dialog.userId === action.id) {
          dialog.messages.unshift({
            messageId: 123456,
            messageText: action.text,
            messageAuthor: 999
          })
        }
        return true
      })
    } else 

    if (action.type === 'OPEN_SIDEBAR_MODAL') {
      this._state.sidebarModal = {
        title: action.title,
        display: true,
      }
      this._callSibscriber()
    } else

    if (action.type === 'CLOSE_SIDEBAR_MODAL') {
      this._state.sidebarModal = {
        title: action.title,
        display: false,
      }
      this._callSibscriber()
    } else

    if (action.type === 'SAVE_PROFILE_NAME') {
      this._state.profile.name = action.name
    } else

    if (action.type === 'SAVE_PROFILE_STATUS') {
      this._state.profile.status = action.status
    } else 

    if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
      this._state.dialogs.forEach(dialog => {
        if (dialog.userId === action.id) {
          dialog.newMessage.text = action.text
        }
      })
    } else

    if (action.type === 'GET_ACTIVE_DIALOG_ID') {
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

    this._callSibscriber()
  }
}

window.state = store._state

export default store