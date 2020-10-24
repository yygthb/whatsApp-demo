import React from 'react'

export default function Input (props) {

  return (
    <div className="profile__input_wrap">
      <span>About</span>
      <div className="input__wrap">
        <form onSubmit={(e) => props.handlerSubmit(e)}>
          <input disabled={props.handlerDisabled}
            id="profile__name_input"
            value={props.value}
            onChange={(e) => {
              if (e.target.value.length < 25) {
                props.handlerChange(e.target.value)
              }
            }}
          ></input>
        </form>
        <div className="input__wrap_edit">
          <span data-testid="pencil" data-icon="pencil" className="">
            <svg onClick={props.handlerEdit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"></path></svg>
          </span>
        </div>
      </div>
    </div>
  )
}