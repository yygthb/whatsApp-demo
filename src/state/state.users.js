// load state - array of dialogs
import faker from 'faker'
import Dialogs from './db.dialogs'

const avatarDefault = '/images/avatar-default.png'
const dialogs = Dialogs()


function loadSimpleDialogs (num) {
  const arr = []
  dialogs.forEach(dialog => {
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

function loadFakeDialogs (num) {
  const arr = []
  dialogs.forEach(dialog => {
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

export {loadSimpleDialogs, loadFakeDialogs}