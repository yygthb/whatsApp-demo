// load state - array of active users to sidebar
import faker from 'faker'
import Dialogs from './db.dialogs'
import Users from './db.users'

const avatarDefault = '/images/avatar-default.png'
const dbDialogs = Dialogs()
const dbUsers = Users(3)

function loadSimpleUsers (num) {
  // console.log('users: ', dbUsers)

  const arr = []
  dbUsers.forEach(user => {
    dbDialogs.forEach(dialog => {
      if (user.userInfo.userId === dialog.userId) {
        arr.push({
          userInfo: user.userInfo,
          userLastMessage: dialog.getLastMessage(),
        })
        return true
      }
    })
    return true
  })
  return arr
}

function loadFakeUsers (num) {
  const arr = []
  dbDialogs.forEach(dialog => {
    for (let i = 1; i <= num; i++) {
      if (dialog.userId === i) {
        arr.push(
          {
            userInfo: {
              userId: i,
              userName: faker.name.findName(),
              userAvatar: faker.image.avatar() || avatarDefault,
            },
            userLastMessage: dialog.getLastMessage(),
          }
        )
      }
    }
  })
  return arr

  // text: faker.lorem.paragraph()
}

export {loadSimpleUsers, loadFakeUsers}