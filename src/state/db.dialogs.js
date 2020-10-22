const randomBoolean = () => {
  return Math.random() >= 0.5
}

export default function Dialogs () {
  return [
    // ====================userId 1====================
    {
      userId: 1,
      messages: [
        {
          messageId: Date(),
          messageText: 'some text from user 1',
          messageAuthor: 1
        },
      ],
      getLastMessage() {
        return {
          incoming: randomBoolean(),
          messageAuthor: this.messages[this.messages.length -1].messageAuthor,
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },

    // ====================userId 2====================
    {
      userId: 2,
      messages: [
        {
          messageId: Date(),
          messageText: 'some text to user 2',
          messageAuthor: 999
        },
      ],
      getLastMessage() {
        return {
          incoming: randomBoolean(),
          messageAuthor: this.messages[this.messages.length -1].messageAuthor,
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },

    // ====================userId 3====================
    {
      userId: 3,
      messages: [
        {
          messageId: Date(),
          messageText: 'some 1st text from user 3',
          messageAuthor: 3
        },
        {
          messageId: Date(),
          messageText: 'some 2nd text from user 3',
          messageAuthor: 3
        },
      ],
      getLastMessage() {
        return {
          incoming: randomBoolean(),
          messageAuthor: this.messages[this.messages.length -1].messageAuthor,
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },
  ]
}