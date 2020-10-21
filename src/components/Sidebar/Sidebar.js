import React from 'react'
import './Sidebar.css'

import Header from './Header/Header'
import SearchField from './SearchField/SearchField'
import Dialogs from './Dialogs/Dialogs'

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <Header />
      <SearchField />
      <Dialogs />
    </div>
  )
}


export default Sidebar