// load state - array of active users to sidebar
import faker from 'faker'
import Dialogs from './db.dialogs'

const avatarDefault = '/images/avatar-default.png'
const dbDialogs = Dialogs()

function loadSimpleUsers (num) {
  const arr = []
  dbDialogs.forEach(dialog => {
    for (let i = 1; i <= num; i++) {
      if (dialog.userId === i) {
        arr.push(
          {
            userId: i,
            userName: `User Name ${i}`,
            userAvatar: avatarDefault,
            userLastMessage: dialog.getLastMessage(),
          }
        )
      }
    }
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
            userId: i,
            userName: faker.name.findName(),
            userAvatar: faker.image.avatar() || avatarDefault,
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