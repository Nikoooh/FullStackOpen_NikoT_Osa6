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
export default notificationSlice.reducer