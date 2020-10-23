import faker from 'faker'

import config from '../config'
import dbDialogs from './db-dialogs'

let store = {
  _callSibscriber () {},
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
    dialogs: dbDialogs.dialogs
  },

  stateAddNewMessaege (id, text) {
    let newMessage = {
      messageId: 123456,
      messageText: text,
      messageAuthor: 999
    }
    this._state.dialogs.forEach(dialog => {
      if (dialog.userId === id) {
        dialog.messages.push(newMessage)
      }
    })
    this._callSibscriber()
  },

  getActiveDialogs() {
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
            lastMessage: dialog.getLastMessage({})
          })
        }
      })
    })
    return listOfDialogs
  },

}

window.state = store._state

export default store