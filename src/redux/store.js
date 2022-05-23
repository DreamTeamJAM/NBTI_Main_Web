import{configureStore}from "@reduxjs/toolkit";
import userReducer from "./Slice";
import VolunReducer from "./volunteringSlice"
import stepReducer from "./stepSlice"
import studentReducer from "./studentSlice"
export default configureStore({
  reducer:{
    user: userReducer,
    volun: VolunReducer,
    step: stepReducer,
    student: studentReducer
  },
});