import React, {useState} from 'react';
import './App.css';

import createDialogs from './state/state.dialogs'
import loadOwnerInfo from './state/state.owner'

import MainPage from './components/MainPage'
import Context from './context'

function App() {
  // load dialogs from remote server
  const [dialogs, setDialog] = useState(createDialogs(5))
  const [owner, setOwner] = useState(loadOwnerInfo())

  return (
    <Context.Provider value={{dialogs, owner}}>
      <div className="page__background">
        <span className="page__background_color"></span>
        <span className="page__background_color"></span>
        <MainPage dialogs={dialogs}/>
      </div>
    </Context.Provider>
  )
}

export default App;
