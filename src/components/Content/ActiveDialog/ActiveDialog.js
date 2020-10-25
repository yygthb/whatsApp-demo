import React, {useContext, useEffect, useState} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import './ActiveDialog.css'

import './Test.css'

import Context from '../../../context'

function Test ({activeDialog}) {
  const {dispatch} = useContext(Context)

  let dataLength = activeDialog.activeMessagesLength
  // console.log('dataLength: ', dataLength)
  let messages = activeDialog.activeMessages
  // console.log('messages: ', messages)

  return (
    <div id="scrollableDiv" 
      style={{ 
        height: '100%', 
        backgroundColor: 'white', 
        flexDirection: 'column-reverse', 
      }}
    >
      <div className="label" style={{backgroundColor: 'red'}}>label</div>
      <InfiniteScroll
        className="InfiniteScroll"
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          flexDirection: 'column-reverse'
        }}
        // dataLength={dataLength}
        dataLength={dataLength}
        next={() => {
          dispatch({type: 'LOAD_MORE_MESSAGES', add3: 3, id: activeDialog.activeUser.userId,})
        }}
        inverse={true}
        hasMore={true}
        scrollableTarget="scrollableDiv"
      >

          <div className="test2">
            {
              messages.map((message, index) => {
                return (
                    <div key={index} className={
                      activeDialog.activeUser.userId === message.messageAuthor ? `content__message incoming` : `content__message outgoing`
                    }>
                      <div className="content__message_text">
                        {message.messageText}
                      </div>
                    </div>
                )
              })
            }
          </div>

      </InfiniteScroll>
    </div>
  )
}

export default function ActiveDialog ({activeDialog}) {
  const {dispatch} = useContext(Context)

  // console.log('activeDialog: ', activeDialog)

  // input
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({
      type: 'SEND_NEW_MESSAGE',
      id: activeDialog.activeUser.userId,
      text: activeDialog.unsentMessage.text
    })
    dispatch({
      type: 'UPDATE_NEW_MESSAGE_TEXT',
      id: activeDialog.activeUser.userId,
      text: '',
    })
  }

  return (
    <div className="activedialog__wrap">

      {/* HEADER */}
      <header className="activedialog__header">
        <div className="header__user">
          <div className="header__user_avatar" 
        style={{background: `center / contain no-repeat url(${activeDialog.activeUser.userAvatar})`}}></div>
          <div className="header__user_info">
            <div  className="header__user_name">{activeDialog.activeUser.userName}</div>
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

        <Test activeDialog={activeDialog}/>

      </main>

      {/* FOOTER */}
      <>
        {/* <footer style={{display: 'none'}} className="activedialog__footer">
          <div className="footer__emoji">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
          </div>
          <form className="input__form" onSubmit={submitHandler}>
            <input 
              type="text"
              className="input__form_text"
              placeholder="Type a message"
              value={newMessageText}
              onChange={e => {
                editNewMessage(e.target.value)
              }}
            ></input>
          </form>
        </footer> */}
      </>
      
      <footer className="activedialog__footer">
        <div className="footer__emoji">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path></svg>
        </div>

        {/* new message input */}
        <form className="input__form" onSubmit={submitHandler}>
          <input 
            type="text"
            className="input__form_text"
            placeholder="Type a message"
            value={activeDialog.unsentMessage.text}
            onChange={e => {
              dispatch({
                type: 'UPDATE_NEW_MESSAGE_TEXT',
                id: activeDialog.activeUser.userId,
                text: e.target.value,
              })
            }}
          ></input>
        </form>

      </footer>
    </div>
  )
}