import{createSlice}from "@reduxjs/toolkit";


export const userSlice=createSlice({
  name: "user",
  initialState:{
    
  },
  reducers:{
    Initial: (state, action) =>{
      state.user=action.payload;
    }
    
  },
});
export const{Initial}=userSlice.actions;
export const selectUser=(state) => state.user.user;
export default userSlice.reducer;