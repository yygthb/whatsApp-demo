import React, {useState, useContext} from 'react'
import './ActiveDialog.css'

import Context from '../../../context'

export default function ActiveDialog ({activeDialog}) {
  const {newMessage, editNewMessage} = useContext(Context)

  console.log('activeDialog: ', activeDialog)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="activedialog__wrap">

      {/* HEADER */}
      <header className="activedialog__header">
        <div className="header__user">
          <div className="header__user_avatar" 
        style={{background: `center / contain no-repeat url(${activeDialog.userInfo.userAvatar})`}}></div>
          <div className="header__user_info">
            <div  className="header__user_name">{activeDialog.userInfo.userName}</div>
            <div  className="header__user_seen">last seen "date"</div>
          </div>
        </div>
        <div className="header__control">
          <div title="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
          </div>
          <div title="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
          </div>
        </div>
      </header>
      
      {/* MAIN */}
      <main className="activedialog__content">
        <div className="activedialog__content_background"></div>
          <div className="content__main">
            <div className="content__main_messages">
              {
                activeDialog.messages.map((message, index) => {
                  return (
                    <div key={index} className={
                      activeDialog.userInfo.userId === message.messageAuthor ? `content__message incoming` : `content__message outgoing`
                    }>
                      <div className="content__message_text">
                        {`auth(${message.messageAuthor}): ${message.messageText}`}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </main>

      {/* FOOTER */}
      <footer className="activedialog__footer">
        <div className="footer__emoji">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
        </div>
        
        {/* Input Form */}
        <form className="input__form" onSubmit={submitHandler}>
          <input 
            type="text"
            className="input__form_text"
            placeholder="Type a message"
            value={newMessage}
            onChange={e => {
              editNewMessage(e.target.value)
            }}
          ></input>
        </form>

      </footer>
    </div>
  )
}