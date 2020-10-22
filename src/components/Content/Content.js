import React, {useContext} from 'react'
import './Content.css'

import Context from '../../context'

const Content = () => {

  const {dialog} = useContext(Context)

  return (
    <>
      {
        dialog ? 
          <div className="page__content_dialog">
            {dialog.userName}
          </div>
          :
          <div className="page__content_home">
          <h2>
            Keep Your phone connected
          </h2>
          <p>
            WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi
          </p>
        </div>
      }
    </>
  )
}

export default Content