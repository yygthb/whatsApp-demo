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
        users.map((user, index) => {
          // console.log('activeDialogId: ', activeDialogId)
          // console.log('user.userInfo.userId: ', user.userInfo.userId)
          return (
            <li key={index} className={activeDialogId === user.userInfo.userId ? 'active' : ''}>
              <Dialog dialog={user}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Dialogs