import React, {useState} from 'react';
import './App.css';

import MainPage from './components/MainPage'

import Context from './context'
import store from './store/state'

function App() {
  const state = store.getState()
  const dispatch = store.dispatch.bind(store)

  // load profile info from db
  const profile = state.profile
  // load users to sidebar from db
  const users = dispatch({type: 'GET_ACTIVE_DIALOGS_TO_SIDEBAR'})

  // new message from div-input
  function divInput(id, text) {
    // store.divNewMessaege(id, text)
    dispatch({
      type: 'SEND_NEW_MESSAGE',
      id,
      text,
    })
  }

  // selecting active dialog from dialogs
  const [activeDialog, setActiveDialog] = useState('')
  const [activeDialogId, setActiveDialogId] = useState('')

  // get dialog-id from Sidebar and push activeDialog to ContentComponent
  function getActiveDialog(id) {
    setActiveDialogId(id)
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

  // sidebar modal (Profile settings)
  const sidebarModal = state.sidebarModal

  return (
    <Context.Provider value={{profile, users, activeDialogId, getActiveDialog, activeDialog, divInput, dispatch, sidebarModal}}>
      <div className="page__background">
        <span className="page__background_color"></span>
        <span className="page__background_color"></span>
        <MainPage />
      </div>
    </Context.Provider>
  )
}

export default App;
