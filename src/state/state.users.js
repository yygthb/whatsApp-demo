// create state - dialog-users info

import faker from 'faker'
import config from '../config'

export default function getAllUsersFromDB (num, action) {
  const users = [{
    userInfo: {
      userId: 22,
      userName: `Jho Silver`,
      userAvatar: config.AVATARDEFAULT,
    },
  }]

  for (let i = 11; i <= num + 10; i++) {
    if (action === 'LOREM') {
      users.push({
        userInfo: {
          userId: i,
          userName: `New User Name ${i}`,
          userAvatar: config.AVATARDEFAULT,
        }
      })
    }
    if (action === 'FAKER') {
      users.push({
        userInfo: {
          userId: i,
          userName: faker.name.findName(),
          userAvatar: faker.image.avatar(),
        }
      })
    }
  }
  return users
}