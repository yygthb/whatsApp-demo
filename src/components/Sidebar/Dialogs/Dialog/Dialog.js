import React from 'react'
import './Dialog.css'

const avatarDefault = '/images/avatar-default.png'

const Dialog = ({dialog}) => {

  console.log('avatar: ', dialog.userAvatar)

  return (
    <div className="dialog__wrap">
      <div className="contact__logo" 
        style={{background: `center / contain no-repeat url(${dialog.userAvatar || avatarDefault})`}}></div>
      <div className="contact__info">
        <div className="contact__info_header">
          <h4 className="contact__userName">
            {dialog.userName}
          </h4>
          <div className="contact__lastmessage_date">10.10.2020</div>
        </div>
        <p className="contact__lastmessage_text">
          last message text ...
          {/* {dialog.userLastMessage} */}
        </p>
      </div>
    </div>
  )
}

export default Dialog