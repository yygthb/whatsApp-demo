import React from 'react'
import './InputForm.css'

export default function InputForm () {
  return (
    <form className="input__form">
      <input 
        className="input__form_text"
        placeholder="Type a message"
      ></input>
    </form>
  )
}