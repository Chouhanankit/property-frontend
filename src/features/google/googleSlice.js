import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    user : null,
    isLoading : false ,
    isSuccess : false,
    isLoading : false ,
    message : ""
}

const googleSlice = createSlice({
  name: "google",
  initialstate,
  reducers,
  extraReducers: (builder) => {},
});



export default googleSlice.reducer
