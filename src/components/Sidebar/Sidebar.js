import React from 'react'
import './Sidebar.css'

import Header from './Header/Header'
import SearchField from './SearchField/SearchField'
import Dialogs from './Dialogs/Dialogs'
import SidebarModal from './SidebarModal/SidebarModal'

const Sidebar = () => {
  
  return (
    <div className="sidebar__wrap">
      <div className="sidebar">
        <Header/>
        <SearchField />
        <Dialogs />
      </div>
      <SidebarModal />
    </div>
  )
}

export default Sidebar