import React, {useState} from 'react';
import './App.css';

import loadOwnerInfo from './state/state.owner'
import {loadSimpleDialogs, loadFakeDialogs} from './state/state.users'

import MainPage from './components/MainPage'
import Context from './context'

function App() {
  // load owner info from remote server
  const [owner, setOwner] = useState(loadOwnerInfo())
  // load dialogs from remote server
  const [dialogs, setDialogs] = useState(loadSimpleDialogs(3)) // load simple test data
  // const [dialogs, setDialogs] = useState(loadFakeDialogs(5)) // load data from faker.js

  // selecting active dialog from dialogs
  const [dialog, setDialog] = useState('')

  // get dialog from DialogsComponent and push it to ContentComponent
  function getDialogId(id) {
    dialogs.forEach(dialog => {
      if (dialog.userId === id) {
        setDialog(dialog)
      }
    })
    return ''
  }

  return (
    <Context.Provider value={{owner, dialogs, getDialogId, dialog}}>
      <div className="page__background">
        <span className="page__background_color"></span>
        <span className="page__background_color"></span>
        <MainPage />
      </div>
    </Context.Provider>
  )
}

export default App;
