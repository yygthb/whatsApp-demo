import React, {useContext} from 'react'
import './Dialogs.css'
import Dialog from './Dialog/Dialog'
import Context from '../../../context'

const Dialogs = () => {

  const {dialogs} = useContext(Context)
  const {dialog} = useContext(Context)

  return (
    <ul className="dialogs__wrap">
      {
        dialogs.map((d, index) => {
          return (
            <li key={index} className={dialog.userId === d.userId ? 'active' : ''}>
              <Dialog dialog={d}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Dialogs