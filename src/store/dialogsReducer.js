const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'

export const updateNewMessageTextAC = (id, text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    id,
    text,
  }
}
export const sendMessageAC = (id, text) => {
  return {
    type: SEND_NEW_MESSAGE,
    id,
    text,
  }
}

export default function dialogsReducer (state, action) {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.forEach(dialog => {
        if (dialog.userInfo.userId === action.id) {
          dialog.newMessage.text = action.text
        }
        return
      })
      return state
    case SEND_NEW_MESSAGE:
      state.forEach(dialog => {
        if (dialog.userInfo.userId === action.id) {
          dialog.messages.unshift({
            messageId: 123456,
            messageText: action.text,
            messageAuthor: 999
          })
        }
        return
      })
      return state
    default:
      return state
  }
}