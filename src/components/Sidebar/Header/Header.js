import React, {useContext, useState} from 'react'
import Context from '../../../context'
import './Header.css'

import {openSidebarModalAC} from '../../../store/sidebarModalReducer'

import profileAvatar from '../../../img/wick.jpg'

const Header = () => {
  const {dispatch} = useContext(Context)

  const menuModal = ['Profile', 'Settings', 'New Group']
  const [menuModalVisible, setMenuModalVisible] = useState('menu__modal')

  function handlerClick(e, title) {
    document.removeEventListener('mousedown', onClickListener)
    document.removeEventListener('keydown', handleEscKeyListener)
    setMenuModalVisible('menu__modal')
    dispatch(openSidebarModalAC(title))
  }

  function handleEscKeyListener(e) {
    if (e.keyCode === 27) {
      document.removeEventListener('keydown', handleEscKeyListener)
      document.removeEventListener('mousedown', onClickListener)
      setMenuModalVisible('menu__modal')
    }
  }

  function onClickListener(e) {
    if (e.target.getAttribute('data-close') !== 'openMenu') {
      document.removeEventListener('mousedown', onClickListener)
      setMenuModalVisible('menu__modal')
    }
  }

  if (menuModalVisible === 'menu__modal open') {
    document.addEventListener('keydown', handleEscKeyListener)
    document.addEventListener('mousedown', onClickListener)
  }

  return (
    <div className="header">
      <div 
        className="profile__foto" 
        style={{background: `center / contain no-repeat url(${profileAvatar})`}}
        onClick={() => dispatch(openSidebarModalAC('Profile'))}
      ></div>
      <div className="profile__control">
        <div title="Status">
          <span></span>
        </div>
        <div title="New Chat">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
        </div>
        <div className="button__menu" title="Menu">
          <svg onClick={(e) => {
            setMenuModalVisible('menu__modal open')
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
          <div className={menuModalVisible}>
            {
              menuModal.map((target, index) => {
                return (
                  <li data-close="openMenu" key={index} title={target} onClick={(e) => {
                    e.preventDefault()
                    handlerClick(e, target)
                  }}>
                    {target}
                  </li>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header