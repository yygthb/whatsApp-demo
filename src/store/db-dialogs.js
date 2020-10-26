// dialogs database

import faker from 'faker'
// import config from '../config'

let dbDialogs = {
  dialogs: [
    // ====== 1 ======
    {
      userInfo: {
        userId: 1,
        // userName: `User Name 1`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Бросали бешено каменья.',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'В меня все ближние мои',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'И правды чистые ученья:',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'Провозглашать я стал любви',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'Страницы злобы и порока.',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'В очах людей читаю я',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'Мне дал всеведенье пророка,',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'С тех пор как вечный судия',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'Прочти!!!',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'Приветствую!',
          messageAuthor: 1
        },
        {
          messageId: 123456,
          messageText: 'Салют! Как жизнь?',
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
      userInfo: {
        userId: 2,
        // userName: `User Name 2`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'some text to user 2',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'some text from user 2',
          messageAuthor: 2
        },
        {
          messageId: 123456,
          messageText: 'text from user 2',
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
      userInfo: {
        userId: 3,
        // userName: `User Name 3`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '10 some text from user 3 ',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: '9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse c ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mo',
          messageAuthor: 3
        },
        {
          messageId: 123456,
          messageText: '2 Lorem ipsum dolor sit amet, ',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
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
      userInfo: {
        userId: 4,
        // userName: `User Name 4`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Видя же, что настал удобный миг, снова приблизился он к Арде и окинул ее сверху взглядом, и красота Земли в пору Весны преисполнила его еще большей ненависти.',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Засим призвал он к себе из чертогов Эа духов, коих обманом склонил к себе на службу, и уверился в своей силе. ',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'Мелькор же знал обо всем, что делалось в Арде, ибо даже тогда были у него тайные друзья и соглядатаи меж Майар, которых привлек он на свою сторону; и вдали, во мраке, обуревали его ненависть и зависть к творениям собратьев своих, каковых желал он видеть своими подданными.',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'Но утомлены были Аулэ и Тулкас, ибо мастерство Аулэ и сила Тулкаса долгое время непрестанно служили на благо всем в дни трудов и забот. ',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'Случилось же так, что, пока Валар отдыхали от трудов своих и следили, как пробуждается к жизни и расцветает задуманное и начатое ими, созвал Манвэ великий пир, и пришли на его зов Валар и все их воинства. ',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'Там, на острове Алмарен, что на Великом Озере, основали Валар первую свою обитель, когда мир был юн, и первозданная зелень казалась чудом в глазах ее творцов; и долгое время царила меж них радость.',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'И пришли звери, и поселились на травянистых равнинах, и в реках и озерах, и под сенью лесов. До поры не распустился еще ни один цветок, не запела ни одна птица – эти творения пока ждали своего часа в лоне Йаванны; но изобильны были ее помыслы, более же всего – в срединных областях Земли, где встречался, сливаясь воедино, свет обоих Светочей. ',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'Тогда же семена, брошенные Йаванной, проросли и дали всходы, и проявилось неисчислимое множество разнообразных растений, великих и малых: мхи и травы, и гигантские папоротники, и деревья, вершины которых венчали тучи, как если бы то были живые горы, а подножия укрывал зеленый сумрак. ',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'Тогда Варда наполнила светочи, и Манвэ освятил их, и установили их Валар на высоких столпах, более величественных, чем все горы последующих дней. Один Светоч возвели они на севере Средиземья, и имя ему было Иллуин; другой же поставлен был на юге и назван Ормал; и свет их струился над Землей, озаряя ее от края до края; и был вечный день.',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'В ту пору Валар упорядочили моря, и земли, и горы; и Йаванна наконец бросила в землю семена, что задумала давным-давно. И теперь, когда огонь был укрощен или погребен в недрах первозданных холмов, понадобился свет, и Аулэ, по просьбе Йаванны, сработал два великих светоча, дабы осветить Средиземье, воздвигнутое им посреди окружных морей. ',
          messageAuthor: 4
        },
        {
          messageId: 123456,
          messageText: 'Говорится среди мудрых, что Первая Война началась еще до того, как Арда обрела законченную форму; прежде, чем появилось что-либо, что растет либо ступает по земле; и долгое время побеждал Мелькор. Но в разгар войны дух великой мощи и силы явился на помощь Валар, услышав с небесных высот, что идет битва в Малом Королевстве; и в Арде зазвучал его смех. Так пришел Тулкас Могучий, чей гнев сметает все, точно порыв ветра, разгоняя облака и тьму; и Мелькор бежал перед его гневом и его смехом, и покинул Арду, и на многие годы воцарился мир. А Тулкас остался и стал одним из Валар Королевства Арды; Мелькор же вынашивал свои замыслы во внешней тьме, и возненавидел Тулкаса отныне и навеки.',
          messageAuthor: 4
        },
      ],
      newMessage: {
        text: 'Сильмариллион читаешь снова?'
      },
      getLastMessage() {
        return {
          text: this.messages[0].messageText
        }
      }
    },

    // ====== 5 ======
    {
      userInfo: {
        userId: 5,
        // userName: `User Name 5`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
          messageAuthor: 5
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
          messageAuthor: 5
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t',
          messageAuthor: 5
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
          messageAuthor: 5
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 5
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 5
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc',
          messageAuthor: 5
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

    // ====== 6 ======
    {
      userInfo: {
        userId: 6,
        // userName: `User Name 6`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Многие думают?',
          messageAuthor: 6
        },
        {
          messageId: 123456,
          messageText: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
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

    // ====== 7 ======
    {
      userInfo: {
        userId: 7,
        // userName: `User Name 7`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty',
          messageAuthor: 7
        },
        {
          messageId: 123456,
          messageText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they can',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desi',
          messageAuthor: 7
        },
        {
          messageId: 123456,
          messageText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. I',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty',
          messageAuthor: 7
        },
        {
          messageId: 123456,
          messageText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when ',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of s',
          messageAuthor: 7
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

    // ====== 8 ======
    {
      userInfo: {
        userId: 8,
        // userName: `User Name 8`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, ',
          messageAuthor: 8
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut off',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
          messageAuthor: 8
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, ',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut off',
          messageAuthor: 8
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cu',
          messageAuthor: 8
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cu',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cu',
          messageAuthor: 8
        },
        {
          messageId: 123456,
          messageText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ',
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

    // ====== 9 ======
    {
      userInfo: {
        userId: 9,
        // userName: `User Name 9`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
        },
        {
          messageId: 123456,
          messageText: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or av',
          messageAuthor: 9
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

    // ====== 10 ======
    {
      userInfo: {
        userId: 10,
        // userName: `User Name 10`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          messageAuthor: 10
        },
        {
          messageId: 123456,
          messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc',
          messageAuthor: 10
        },
      
      ],
      newMessage: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
      },
      getLastMessage() {
        return {
          text: this.messages[0].messageText
        }
      }
    },

    // ====== 11 ======
    {
      userInfo: {
        userId: 11,
        // userName: `User Name 11`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Не холодно в пальтишке?',
          messageAuthor: 11
        },
        {
          messageId: 123456,
          messageText: 'Ку!',
          messageAuthor: 11
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

    // ====== 12 ======
    {
      userInfo: {
        userId: 12,
        // userName: `User Name 12`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
          messageAuthor: 12
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, se',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem a',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta',
          messageAuthor: 12
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volup',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste nat',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,',
          messageAuthor: 12
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit a',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,',
          messageAuthor: 12
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, se',
          messageAuthor: 12
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit a',
          messageAuthor: 999
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem ',
          messageAuthor: 12
        },
        {
          messageId: 123456,
          messageText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,',
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

    // ====== 13 ======
    {
      userInfo: {
        userId: 13,
        // userName: `User Name 13`,
        // userAvatar: config.AVATAR_DEFAULT,
        userName: faker.name.findName(),
        userAvatar: faker.image.avatar(),
      },
      messages: [
        {
          messageId: 123456,
          messageText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
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


  ]
}

export default dbDialogs