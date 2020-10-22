// load active dialog to push it to Content

import Dialogs from './db.dialogs'
import Users from './db.users'

const dbDialogs = Dialogs()
const dbUsers = Users(3)

function loadActiveDialog (id) {
  // console.log('users: ', dbUsers)

  let messages = []
  dbDialogs.forEach(dialog => {
    if (dialog.userId === id) {
      messages = dialog.messages
    }
  })
  let userActive = {}
  dbUsers.forEach(user => {
    if (user.userInfo.userId === id) {
      userActive = user.getUser()
    }
  })

  // console.log(`id ${id} messages: `, messages)
  // console.log(`id ${id} user: `, userActive)

  return {
    userInfo: userActive,
    userLastMessage: {
      messageAuthor: 1,
      text: 'some text from user 1'
    },
    messages
  }
}

export {loadActiveDialog}