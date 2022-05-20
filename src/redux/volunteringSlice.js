import { createSlice } from '@reduxjs/toolkit'

const VolunteringSlice = createSlice({
  name: 'volun',
  initialState: [
    {},
  ],
  reducers: {
    add(state, { payload }) {
      state.push(payload)
    },
    del(state, { payload: index }) {
     delete state.splice(index)
    },
  },
})

export const { add, del } = VolunteringSlice.actions

export const selectVoluns = ({volun }) => volun

export default VolunteringSlice.reducer