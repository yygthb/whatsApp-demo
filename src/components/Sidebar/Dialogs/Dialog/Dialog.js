import React from 'react'
import './Dialog.css'

const avatarDefault = '/images/avatar-default.png'

// if message > 28 symbs, add ... at the end
function cutLastMessage(str) {
  console.log(`${str}: ${str.length} symb`)
  let cut = ''
  if (str.length > 28) {
    cut = str.slice(0, 27) + ' ...'
    return cut
  }
  return str
}

const Dialog = ({dialog}) => {

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
          {/* last message text ... */}
          {cutLastMessage(dialog.userLastMessage)}
        </p>
      </div>
    </div>
  )
}

export default Dialog