import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notification(state, action) {
      return action.payload
    },
    resetNotification() {
      return null
    }
  }
})

export const { notification, resetNotification } = notificationSlice.actions

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(notification(content))
    setTimeout(() => {
      dispatch(resetNotification())
    }, time * 1000)
  }
}

export default notificationSlice.reducer