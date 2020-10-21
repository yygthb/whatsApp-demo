import React, {useState} from 'react';
import './App.css';

import createDialogs from './state/state.dialogs'
import MainPage from './components/MainPage'
import Context from './context'

function App() {
  // load dialogs from remote server
  const [dialogs, setDialog] = useState(createDialogs(5))

  return (
    <Context.Provider value={{dialogs}}>
      <div className="page__background">
        <span></span>
        <span></span>
        <MainPage dialogs={dialogs}/>
      </div>
    </Context.Provider>
  )
}

export default App;
