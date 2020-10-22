import React from 'react'
import './Dialog.css'

// if message > 28 symbs, add ... at the end
function cutLastMessage(str) {
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
      <div className="contact__avatar" 
        style={{background: `center / contain no-repeat url(${dialog.userAvatar})`}}></div>
      <div className="contact__info">
        <div className="contact__info_wrap">
          <div className="contact__info_header">
            <h4 className="contact__info_userName">
              {dialog.userName}
            </h4>
            <div className="contact__info_date">10.10.2020</div>
          </div>
          <div className="contact__lastmessage_wrap">
            <div className="contact__lastmessage_text">
              <p>
                {/* last message text ... */}
                {cutLastMessage(dialog.userLastMessage)}
              </p>
            </div>
            <div className="dialog__settings_wrap">
              <span className="dialog__settings_mark"></span>
              <span className="dialog__settings_mark"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialog