import{configureStore}from "@reduxjs/toolkit";
import userReducer from "./Slice";
import VolunReducer from "./volunteringSlice"
export default configureStore({
  reducer:{
    user: userReducer,
    volun: VolunReducer,
  },
});