import React, {useState} from 'react';
import './App.css';

import MainPage from './components/MainPage'

import config from './config'
import loadOwnerInfo from './state/state.owner'
import getAllUsersFromDB from './state/state.users'
import Dialogs from './state/db.dialogs';
import Context from './context'

const dbDialogs = Dialogs()

const activeDialogDebug = {
  userInfo: {
    userId: 22,
    userName: `Jho Silver`,
    userAvatar: config.AVATARDEFAULT,
  },
  messages: [
    {
      messageId: 123456,
      messageText: 'some 1st text from user 22',
      messageAuthor: 22
    },
    {
      messageId: 123456,
      messageText: 'Сервис проверки уникальности текста - поиск источников, подсчёт уникальности текста в процентах. Поиск цитат вашего контента с проверкой',
      messageAuthor: 22
    },
    {
      messageId: 123456,
      messageText: 'some 1st text to user 22',
      messageAuthor: 999
    },
    {
      messageId: 123456,
      messageText: 'some 1st text from user 22',
      messageAuthor: 22
    },
  ]
}

function App() {
  // load owner info from db
  const [owner] = useState(loadOwnerInfo())
  // load all users from db
  const [stateAllUsers] = useState(getAllUsersFromDB(3, config.LOADUSERSFROM))
  // load all dialogs from db
  const [stateAllDialogs] = useState(dbDialogs)

  // input form
  const [newMessage, setNewMessage] = useState('')
  function editNewMessage(value) {
    setNewMessage(value)
  }

  // users to sidebar
  const [users] = useState(() => {
    const arr = []
    stateAllUsers.forEach(user => {
      stateAllDialogs.forEach(dialog => {
        if (user.userInfo.userId === dialog.userId) {
          arr.push({
            userInfo: user.userInfo,
            userLastMessage: dialog.getLastMessage(),
          })
          return true
        }
      })
      return true
    })
  return arr
  })

  // selecting active dialog from dialogs
  const [activeDialog, setActiveDialog] = useState(activeDialogDebug)
  const [activeDialogId, setActiveDialogId] = useState('')

  // get dialog-id from Sidebar and push activeDialog to ContentComponent
  function getActiveDialog(id) {
    setActiveDialogId(id)
    setNewMessage('')

    let userInfo = {}
    stateAllUsers.forEach(user => {
      if (user.userInfo.userId === id) {
        userInfo = user.userInfo
        return true
      }
    })
    let messages = []
    stateAllDialogs.forEach(dialog => {
      if (dialog.userId === id) {
        messages = dialog.messages
        return true
      }
    })

    setActiveDialog({
      userInfo,
      messages,
    })
  }

  return (
    <Context.Provider value={{owner, users, activeDialogId, getActiveDialog, 
      activeDialog, newMessage, editNewMessage}}>
      <div className="page__background">
        <span className="page__background_color"></span>
        <span className="page__background_color"></span>
        <MainPage />
      </div>
    </Context.Provider>
  )
}

export default App;
