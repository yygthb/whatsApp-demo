import React from 'react'
import './MainPage.css'

import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'

const MainPage = (props) => {
  return (
    <div className="page__wrap">
      <Sidebar dialogs={props.dialogs}/>
      <Content />
    </div>
  )
}

export default MainPage