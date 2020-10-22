// load state - array of dialogs

import faker from 'faker'

const avatarDefault = '/images/avatar-default.png'

const randomBoolean = () => {
  return Math.random() >= 0.5
}

function loadSimpleDialogs (num) {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(
      {
        userId: i,
        userName: `Name ${i}`,
        userAvatar: avatarDefault,
        userLastMessage: {
          incoming: randomBoolean(),
          text: `${i}: Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку`
        },
      }
    )
  }
  return arr
}

function loadFakeDialogs (num) {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(
      {
        userId: i,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar() || avatarDefault,
        userLastMessage: {
          incoming: randomBoolean(),
          text: faker.lorem.paragraph()
        },
      }
    )
  }
  return arr
}

export {loadSimpleDialogs, loadFakeDialogs}