import { createSlice } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    name: "",
    firstSurname: "",
    work :[]
  },
  reducers: {
  
    updateStudent: (state, action) => {
     return {...state , ...action.payload}
        
    }
    
  },
})

export const {updateStudent} = studentSlice.actions
export const selectStudent = (state) => state.student
export default studentSlice.reducer