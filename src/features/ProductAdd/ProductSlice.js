import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import propertyservice from "./ProductService";
import axios from "axios";

const initialState = {
    property: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: "",
  };

const ProductSlice = createSlice({
  name: "Property",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(Addproperty.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.users = null;
      state.isError = false;
    })
    .addCase(Addproperty.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload;
      state.isError = false;
    })
    .addCase(Addproperty.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.users = null;
      state.message = action.payload;
    })
  },
});

export default ProductSlice.reducer;

export const Addproperty = createAsyncThunk(
  "PROPERTY/ADD",
  async (formData, thunkAPI) => {
    console.log(formData)
    try {
      // const response = await axios.post('http://localhost:5000/api/property/properties', formData);
      // return response.data;
      return await propertyservice.PropertyAdd(formData);
    } catch (error) {
        const message = error || error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
  }
);
