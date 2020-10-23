import React, {useState} from 'react';
import './App.css';

import MainPage from './components/MainPage'

import Context from './context'

import state from './store/state'

function App() {
  // load profile info from db
  const [profile] = useState(state.profile)
  // load all users from db to sidebar
  const [users] = useState(() => {
    let listOfDialogs = []

    state.dialogs.forEach(dialog => {
      state.users.forEach(user => {
        if (dialog.userId === user.userId) {
          listOfDialogs.push({
            userInfo: {
              userId: user.userId,
              userName: user.userName,
              userAvatar: user.userAvatar
            },
            lastMessage: dialog.getLastMessage()
          })
        }
      })
    })
    return listOfDialogs
  })

  // input form
  const [newMessage, setNewMessage] = useState('')
  function editNewMessage(value) {
    setNewMessage(value)
  }

  // selecting active dialog from dialogs
  const [activeDialog, setActiveDialog] = useState('')
  const [activeDialogId] = useState('')

  // get dialog-id from Sidebar and push activeDialog to ContentComponent
  function getActiveDialog(id) {
    let activeUser = {}
    state.users.forEach(user => {
      if (user.userId === id) {
        activeUser = user
        return true
      }
    })

    let activeMessages = {}
    state.dialogs.forEach(dialog => {
      if (dialog.userId === id) {
        // console.log('messages: ', dialog.messages)
        activeMessages = dialog.messages
        return true
      }
    })

    setActiveDialog({
      activeUser,
      activeMessages,
    })

  }

  return (
    <Context.Provider value={{profile, users, activeDialogId, getActiveDialog, 
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
