import React, {useContext} from 'react'
import './Dialog.css'

import Context from '../../../../context'

import {getActiveDialogIdAC} from '../../../../store/state'

// if message > 28 symbs, add ... at the end
function cutLastMessage(str) {
  let cut = ''
  if (str.length > 28) {
    cut = str.slice(0, 27) + ' ...'
    return cut
  }
  return str
}

const Dialog = ({dialog, colorDialogId, dispatch}) => {
  
  let lastmessageClassName = 'contact__lastmessage_text'
  let lastMessageText = ''
  if (dialog.userInfo.userId === colorDialogId) {
    lastMessageText = dialog.lastMessage.text
    lastmessageClassName = 'contact__lastmessage_text'
  } else {
    if (dialog.newMessage.text === '') {
      lastMessageText = dialog.lastMessage.text
      lastmessageClassName = 'contact__lastmessage_text'
    } else {
      lastMessageText = `Draft: ${dialog.newMessage.text}`
      lastmessageClassName = 'contact__lastmessage_text draft'
    }
  }

  const {getActiveDialog} = useContext(Context)

  return (
    <div className="dialog__wrap" onClick={() => {
      getActiveDialog(dialog.userInfo.userId)
      dispatch(getActiveDialogIdAC(dialog.userInfo.userId))
    }}>
      <div className="contact__avatar" 
        // style={{background: `center / contain no-repeat url(${dialog.userInfo.userAvatar})`}}
        ></div>
      <div className="contact__info">
        <div className="contact__info_wrap">
          <div className="contact__info_header">
            <h4 className="contact__info_userName">
              {dialog.userInfo.userName}
            </h4>
            <div className="contact__info_date">10.10.2020</div>
          </div>
          <div className="contact__lastmessage_wrap">
            <div className={lastmessageClassName}>
              <p>
                {
                  cutLastMessage(lastMessageText)
                }
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