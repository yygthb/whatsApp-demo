import React, {useState} from 'react';
import './App.css';

import createDialogs from './state/state.dialogs'
import loadOwnerInfo from './state/state.owner'

import MainPage from './components/MainPage'
import Context from './context'

function App() {
  // load owner info from remote server
  const [owner, setOwner] = useState(loadOwnerInfo())
  // load dialogs from remote server
  const [dialogs, setDialogs] = useState(createDialogs(5))
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
