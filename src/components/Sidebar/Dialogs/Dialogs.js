import React, {useContext} from 'react'
import './Dialogs.css'
import Dialog from './Dialog/Dialog'
import Context from '../../../context'

const Dialogs = () => {

  const {users} = useContext(Context)
  const {activeDialogId} = useContext(Context)

  return (
    <ul className="dialogs__wrap">
      {
        users.map((d, index) => {
          return (
            <li key={index} className={activeDialogId === d.userInfo.userId ? 'active' : ''}>
              <Dialog dialog={d}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Dialogs