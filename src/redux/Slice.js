import{createSlice}from "@reduxjs/toolkit";


export const userSlice=createSlice({
  name: "user",
  initialState:{
    username:"",
    password:"",
    
  },
  reducers:{
    updateUser: (state, action) => {
      return {
          ...state,
          ...action.payload
      }

  }
}
});
export const{updateUser}=userSlice.actions;
export const selectUser=(state) => state.user;
export default userSlice.reducer;