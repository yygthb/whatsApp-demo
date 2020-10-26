import React, {useContext, useState} from 'react'
import './Profile.css'
import Context from '../../../../context'
import Input from './ProfileInputWrap'

import {saveProfileNameAC, saveProfileStatusAC} from '../../../../store/profileReducer'

import profileAvatar from '../../../../img/wick.jpg'

export default function Profile() {
  const {profile, dispatch} = useContext(Context)

  const [profileName, setProfileName] = useState(profile.name)
  const [disabledName, setDisabledName] = useState(true)

  const [profileStatus, setProfileStatus] = useState(profile.status)
  const [disabledStatus, setDisabledStatus] = useState(true)

  function editProfileName () {
    setDisabledName(false)
  }
  function saveProfileName (e) {
    e.preventDefault()
    if (profileName.trim()) {
      dispatch(saveProfileNameAC(profileName))
      setDisabledName(true)
    }
  }

  function editProfileStatus () {
    setDisabledStatus(false)
  }
  function saveProfileStatus (e) {
    e.preventDefault()
    dispatch(saveProfileStatusAC(profileStatus))
    setDisabledStatus(true)
  }

  function handleEscKey(e) {
    if (e.keyCode === 27) {
      setDisabledName(true)
      setDisabledStatus(true)
      setProfileName(profile.name)
      setProfileStatus(profile.status)
      document.removeEventListener('keydown', handleEscKey)
    }
  }
  if (disabledName === false || disabledStatus === false) {
    document.addEventListener('keydown', handleEscKey)
  }

  return (
    <div className="modal__wrap_profile">
      <div className="profile__avatar">
        <div 
          className="profile__avatar_img"
          title="change avatar"
          style={{background: `center / contain no-repeat url(${profileAvatar})`}}
        ></div>
      </div>
      <div className="profile__name">
        <Input
          title={'Your Name'}
          handlerSubmit={saveProfileName}
          handlerDisabled={disabledName}
          value={profileName}
          handlerChange={setProfileName}
          handlerEdit={editProfileName}
        />
      </div>
      <div className="profile__addinfo">
        <span>
          This is not your username or pin. This name will be visible to your WhatsApp contacts.
        </span>
      </div>
      <div className="profile__status">
        <Input
          title={'About'}
          handlerSubmit={saveProfileStatus}
          handlerDisabled={disabledStatus}
          value={profileStatus}
          handlerChange={setProfileStatus}
          handlerEdit={editProfileStatus}
        />
      </div>
    </div>
  )
}