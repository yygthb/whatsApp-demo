import React from 'react'
import './Dialog.css'

const Dialog = ({dialog}) => {

  return (
    <div className="dialog__wrap">
      <div className="contact__logo"></div>
      <div className="contact__info">
        <div className="contact__info_header">
          <h4 className="contact__userName">
            {dialog.userName}
          </h4>
          <div className="contact__lastmessage_date">10.10.2020</div>
        </div>
        <p className="contact__lastmessage_text">
          last message text ...
        </p>
      </div>
    </div>
  )
}

export default Dialog