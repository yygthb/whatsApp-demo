import React from 'react'
import './MainPage.css'

import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'

const MainPage = () => {
  return (
    <div className="page__wrap">
      <Sidebar />
      <Content />
    </div>
  )
}

export default MainPage