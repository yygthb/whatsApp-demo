import React, {useState} from 'react';
import './App.css';

import loadOwnerInfo from './state/state.owner'
import {loadSimpleUsers, loadFakeUsers} from './state/state.users'

import MainPage from './components/MainPage'
import Context from './context'

function App() {
  // load owner info from remote server
  const [owner, setOwner] = useState(loadOwnerInfo())
  // load user's to sidebar from remote server
  // const [users, setUsers] = useState(loadSimpleUsers(3)) // load simple test data
  const [users, setUsers] = useState(loadFakeUsers(5)) // load data from faker.js

  // selecting active dialog from dialogs
  const [dialog, setDialog] = useState('')

  // get dialog-id from Sidebar and push dialog-lastMessage to ContentComponent
  function getActiveUserId(id) {
    users.forEach(dialog => {
      if (dialog.userId === id) {
        setDialog(dialog)
      }
    })
    return ''
  }

  return (
    <Context.Provider value={{owner, users, getActiveUserId, dialog}}>
      <div className="page__background">
        <span className="page__background_color"></span>
        <span className="page__background_color"></span>
        <MainPage />
      </div>
    </Context.Provider>
  )
}

export default App;
