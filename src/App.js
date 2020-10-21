import React, {useState} from 'react';
import './App.css';
import MainPage from './components/MainPage'

function createDialogs (num) {
  const arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(
      {
        userId: i,
        userName: `Name ${i}`
      }
    )
  }
  return arr
}

function App() {

  // const [dialogs, setDialog] = useState([
  //   {userId: 1, userName: `Name 1`},
  //   {userId: 2, userName: `Name 2`},
  //   {userId: 3, userName: `Name 3`},
  // ])
  const [dialogs, setDialog] = useState(createDialogs(5))

  return (
    <div className="page__background">
      <span></span>
      <span></span>
      <MainPage dialogs={dialogs}/>
    </div>
  )
}

export default App;
