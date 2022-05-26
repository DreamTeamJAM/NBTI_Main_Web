import{configureStore}from "@reduxjs/toolkit";
import userReducer from "./Slice";
import stepReducer from "./stepSlice"
import studentReducer from "./studentSlice"
export default configureStore({
  reducer:{
    user: userReducer,
    step: stepReducer,
    student: studentReducer
  },
});