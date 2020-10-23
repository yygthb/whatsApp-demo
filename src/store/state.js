import faker from 'faker'

import config from '../config'
import dbDialogs from './db-dialogs'

let state = {
  // =========== Profile ===========
  profile: {
    id: 999,
    name: 'John Wick',
    avatar: config.AVATARPROFILE,
  },

  // =========== Contacts ===========
  users: [
    {
      userId: 1,
      userName: `User Name 1`,
      userAvatar: config.AVATARDEFAULT,
      // userName: faker.name.findName(),
      // userAvatar: faker.image.avatar(),
    },
    {
      userId: 2,
      userName: `User Name 2`,
      userAvatar: config.AVATARDEFAULT,
      // userName: faker.name.findName(),
      // userAvatar: faker.image.avatar(),
    },
    {
      userId: 3,
      userName: `User Name 3`,
      userAvatar: config.AVATARDEFAULT,
      // userName: faker.name.findName(),
      // userAvatar: faker.image.avatar(),
    },
    {
      userId: 4,
      userName: `User Name 4`,
      userAvatar: config.AVATARDEFAULT,
      // userName: faker.name.findName(),
      // userAvatar: faker.image.avatar(),
    },
    // {
    //   userId: 5,
      // userName: `User Name 4`,
      // userAvatar: config.AVATARDEFAULT,
    //   userName: faker.name.findName(),
    //   userAvatar: faker.image.avatar(),
    // },
  ],

  // =========== Dialogs ===========
  dialogs: dbDialogs.dialogs
}

export default state