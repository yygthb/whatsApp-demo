const randomBoolean = () => {
  return Math.random() >= 0.5
}

export default function Dialogs () {
  return [
    // ==================== userId 1 ====================
    {
      userId: 1,
      messages: [
        {
          messageId: 123456,
          messageText: 'some text from user 1',
          messageAuthor: 1
        },
      ],
      getLastMessage() {
        return {
          messageAuthor: this.messages[this.messages.length -1].messageAuthor,
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },

    // ==================== userId 2 ====================
    {
      userId: 2,
      messages: [
        {
          messageId: 123456,
          messageText: 'some text to user 2',
          messageAuthor: 999
        },
      ],
      getLastMessage() {
        return {
          messageAuthor: this.messages[this.messages.length -1].messageAuthor,
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },

    // ==================== userId 3 ====================
    {
      userId: 3,
      messages: [
        {
          messageId: 123456,
          messageText: 'some 1st text from user 3',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: 'Сервис проверки уникальности текста - поиск источников, подсчёт уникальности текста в процентах. Поиск цитат вашего контента с проверкой',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: 'some text to user 3',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Проверка текста на уникальность онлайн, точная и быстрая проверка покажет процент уникальности статьи для сайта или Яндекс Дзен.',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'some text to user 3',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'some text to user 3',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'TEXT.RU - это сервис, на котором копирайтеры, благодаря своему умению писать качественные статьи, могут зарабатывать хорошие деньги',
          messageAuthor: 999
        },
      ],
      getLastMessage() {
        return {
          messageAuthor: this.messages[this.messages.length -1].messageAuthor,
          text: this.messages[this.messages.length -1].messageText
        }
      }
    },
  ]
}