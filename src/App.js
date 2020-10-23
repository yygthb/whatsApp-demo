import React, {useState} from 'react';
import './App.css';

import MainPage from './components/MainPage'

import Context from './context'
import store from './store/state'

function App() {
  const state = store.getState()

  // load profile info from db
  const profile = state.profile
  // load users to sidebar from db
  const users = store.getActiveDialogs()

  // new message input form
  const [newMessageText, setNewMessage] = useState('')
  function editNewMessage(value) {
    setNewMessage(value)
  }
  function pullNewMessage (id) {
    if (newMessageText !== '') {
      store.stateAddNewMessaege(id, newMessageText)
    }
    setNewMessage('')
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
      activeDialog, newMessageText, editNewMessage, pullNewMessage}}>
      <div className="page__background">
        <span className="page__background_color"></span>
        <span className="page__background_color"></span>
        <MainPage />
      </div>
    </Context.Provider>
  )
}

export default App;
