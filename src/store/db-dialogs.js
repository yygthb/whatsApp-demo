// dialogs database

import config from '../config'

let dbDialogs = {
  dialogs: [
    // ====== 1 ======
    {
      userId: 1,
      userName: `User Name 1`,
      userAvatar: config.AVATAR_DEFAULT,
      messages: [
        {
          messageId: 123456,
          messageText: '11 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '10 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '9 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '8 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '7 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '6 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '5 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '4 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '3 another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '2 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: '1 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
          messageAuthor: 999
        },
      ],
      newMessage: {
        text: ''
      },
      getLastMessage() {
        return {
          text: this.messages[0].messageText
        }
      }
    },

    // ====== 2 ======
    {
      userId: 2,
      userName: `User Name 2`,
      userAvatar: config.AVATAR_DEFAULT,
      messages: [
        {
          messageId: 123456,
          messageText: 'some text from user 2',
          messageAuthor: 2
        },
      ],
      newMessage: {
        text: ''
      },
      getLastMessage() {
        return {
          text: this.messages[0].messageText
        }
      }
    },

    // ====== 3 ======
    {
      userId: 3,
      userName: `User Name 3`,
      userAvatar: config.AVATAR_DEFAULT,
      messages: [
        {
          messageId: 123456,
          messageText: '10 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '9 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '8 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '7 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '6 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '5 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '4 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: '3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '2 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: '1 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
      ],
      newMessage: {
        text: ''
      },
      getLastMessage() {
        return {
          text: this.messages[0].messageText
        }
      }
    },

    // ====== 4 ======
    {
      userId: 4,
      userName: `User Name 4`,
      userAvatar: config.AVATAR_DEFAULT,
      messages: [
        {
          messageId: 123456,
          messageText: 'some text from user 4 some text from user 4 some text from user 4 some text from user 4 some text from user 4 some text from user 4 some text from user 4 some text from user 4 ',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'some text to user 4',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'some text from user 4',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'some text to user 4 some text to user 4 some text to user 4 some text to user 4 some text to user 4 some text to user 4 ',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'some text from user 4',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'some text from user 4 some text from user 4 some text from user 4 some text from user 4 some text from user 4 ',
          messageAuthor: 4
        },
      ],
      newMessage: {
        text: 'unsent text to 4'
      },
      getLastMessage() {
        return {
          text: this.messages[0].messageText
        }
      }
    },
  ]
}

export default dbDialogs