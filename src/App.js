import React, {useState} from 'react';
import './App.css';

import MainPage from './components/MainPage'

import Context from './context'
import store from './store/state'

import {getActiveDialogsToSidebarAC} from './store/state'

function App() {
  const state = store.getState()
  const dispatch = store.dispatch.bind(store)

  // load profile info from db
  const profile = state.profile
  // load users to sidebar from db
  const users = dispatch(getActiveDialogsToSidebarAC())

  // selecting active dialog from dialogs
  const [activeDialog, setActiveDialog] = useState('')
  const [colorDialogId, setcolorDialogId] = useState('')

  // get dialog-id from Sidebar and push activeDialog to ContentComponent
  function getActiveDialog(id) {
    setcolorDialogId(id)
    setActiveDialog(state.activeDialog)
  }

  // sidebar modal (Profile settings)
  const sidebarModal = state.sidebarModal

  return (
    <Context.Provider value={{profile, users, colorDialogId, getActiveDialog, activeDialog, dispatch, sidebarModal}}>
      <div className="page__background">
        <span className="page__background_color"></span>
        <span className="page__background_color"></span>
        <MainPage />
      </div>
    </Context.Provider>
  )
}

export default App;
