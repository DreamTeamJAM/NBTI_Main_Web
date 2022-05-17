import{createSlice}from "@reduxjs/toolkit";


export const userSlice=createSlice({
  name: "user",
  initialState:{
    user: "null",
  },
  reducers:{
    Initial: (state, action) =>{
      state.user=action.payload;
    },
    Secondary: (state, action) =>{
        state.user=action.payload;
      },
      
    Tertiary: (state, action) =>{
        state.user=action.payload;
      },
  },
});
export const{Initial,Secondary,Tertiary}=userSlice.actions;
export const selectUser=(state) => state.user.user;
export default userSlice.reducer;