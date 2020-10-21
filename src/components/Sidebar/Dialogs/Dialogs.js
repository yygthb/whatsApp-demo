import React from 'react'
import Dialog from './Dialog/Dialog'

import './Dialogs.css'

const Dialogs = ({dialogs}) => {

  console.log('dialogs: ', dialogs)

  return (
    <ul className="dialogs__wrap">
      {
        dialogs.map((dialog, index) => {
          return (
            <li key={index}>
              <Dialog dialog={dialog}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Dialogs