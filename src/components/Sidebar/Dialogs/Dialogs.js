import React, {useContext} from 'react'
import './Dialogs.css'
import Dialog from './Dialog/Dialog'
import Context from '../../../context'

const Dialogs = () => {

  const {dialogs} = useContext(Context)

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