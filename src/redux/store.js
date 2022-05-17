import{configureStore}from "@reduxjs/toolkit";
import userReducer from "./Slice";
export default configureStore({
  reducer:{
    user: userReducer,
  },
});