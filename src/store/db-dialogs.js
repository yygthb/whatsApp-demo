// dialogs database

let dbDialogs = {
  dialogs: [
    // ====== 1 ======
    {
      userId: 1,
      messages: [
        {
          messageId: 123456,
          messageText: 'some text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'another text from user 1',
          messageAuthor: 1
        },
      ],
      getLastMessage() {
        return {
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },
    // ====== 2 ======
    {
      userId: 2,
      messages: [
        {
          messageId: 123456,
          messageText: 'some text from user 2',
          messageAuthor: 2
        },
      ],
      getLastMessage() {
        return {
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },
    // ====== 3 ======
    {
      userId: 3,
      messages: [
        {
          messageId: 123456,
          messageText: '1 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '2 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '4 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '5 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '6 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '7 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: '8 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '9 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3 some text to user 3',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: '10 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 some text from user 3 ',
          messageAuthor: 3
        },
      ],
      getLastMessage() {
        return {
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },
    // ====== 4 ======
    {
      userId: 4,
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
      getLastMessage() {
        return {
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },
  ]
}

export default dbDialogs