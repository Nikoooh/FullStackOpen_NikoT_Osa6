import { createSlice } from "@reduxjs/toolkit"

const initialState = 'ALL'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    anecdoteFilter(state, action) {
      return action.payload
    }
  }
})

export const { anecdoteFilter } = filterSlice.actions
export default filterSlice.reducer