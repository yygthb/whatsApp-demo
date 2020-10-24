import React, {useContext} from 'react'
import './SidebarModal.css'

import Context from '../../../context'
import Profile from './SidebarModalContent/Profile'

export default function SidebarModal() {
  const {sidebarModal, dispatch} = useContext(Context)

  const modalWrapClassName = sidebarModal.display === true ? 'sidebar__modal_wrap open' : 'sidebar__modal_wrap'

  return (
    <div className={modalWrapClassName}>
      <div className="sidebar__modal_header">
        <span></span>
        <div className="header__wrap">
          <div className="header__wrap_cancel">
            <span title="Back">
              <svg onClick={() => {dispatch({type: 'CLOSE_SIDEBAR_MODAL', title: sidebarModal.title})}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg>
            </span>
          </div>
          <span className="header__wrap_title">Profile</span>
        </div>
      </div>
      <div className="sidebar__modal_body">
        {
          (sidebarModal.title === 'Profile') ? <Profile /> : <></>
        }
      </div>
      <span className="sidebar__modal_footer"></span>
    </div>
  )
}