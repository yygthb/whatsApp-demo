import React, {useState, useContext} from 'react'
import './InputForm.css'

import Context from '../../../context'

export default function InputForm () {
  const newMessage = useContext(Context)

  const [value, setValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    console.log('123')
  }

  return (
    <form className="input__form" onSubmit={submitHandler}>
      <input 
        type="text"
        className="input__form_text"
        placeholder="Type a message"
        value={newMessage}
        onChange={e => {
          setValue(e.target.value)
        }}
      ></input>
    </form>
  )
}