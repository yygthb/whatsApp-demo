// create state - array of dialogs

import faker from 'faker'

export default function createDialogs (num) {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(
      {
        userId: i,
        // userName: `Name ${i}`
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
        userLastMessage: faker.lorem.paragraph(),
      }
    )
  }
  return arr
}