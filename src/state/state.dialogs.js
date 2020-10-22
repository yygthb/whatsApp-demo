// create state - array of dialogs

import faker from 'faker'

const avatarDefault = '/images/avatar-default.png'

export default function createDialogs (num) {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(
      {
        userId: i,
        // userName: `Name ${i}`
        userName: faker.name.findName(),
        // userAvatar: faker.image.avatar() || avatarDefault,
        userAvatar: avatarDefault || faker.image.avatar(),
        userLastMessage: faker.lorem.paragraph(),
      }
    )
  }
  return arr
}