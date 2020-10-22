import React, {useContext, useState} from 'react'
import './Dialog.css'

import Context from '../../../../context'

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

  const {getActiveUserId} = useContext(Context)

  return (
    <div className="dialog__wrap" onClick={() => {
      getActiveUserId(dialog.userInfo.userId)
    }}>
      <div className="contact__avatar" 
        style={{background: `center / contain no-repeat url(${dialog.userInfo.userAvatar})`}}></div>
      <div className="contact__info">
        <div className="contact__info_wrap">
          <div className="contact__info_header">
            <h4 className="contact__info_userName">
              {dialog.userInfo.userName}
            </h4>
            <div className="contact__info_date">10.10.2020</div>
          </div>
          <div className="contact__lastmessage_wrap">
            <div className="contact__lastmessage_text">
              <p>
                {cutLastMessage(dialog.userLastMessage.text)}
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